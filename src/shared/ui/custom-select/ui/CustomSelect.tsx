import { memo, useEffect, useRef, useState } from 'react';

import cls from './CustomSelect.module.scss';

import { classNames } from '@/shared/lib';

import {
  flip,
  FloatingFocusManager,
  offset,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  useTransitionStyles,
  useTypeahead,
} from '@floating-ui/react';

export interface Option<T, R> {
  name: R;
  value: T;
}
interface CustomSelectProps<T> {
  className?: string;
  disabled?: boolean;
  multiple?: boolean;
  onChange: (value: T) => void;
  options: Option<string, string>[];
  placeholder?: string;
  value?: string[] | string;
}

interface Options {
  names: string[];
  values: string[];
}

const CustomSelectComponent = <T,>(props: CustomSelectProps<T>) => {
  const {
    options,
    onChange,
    multiple = false,
    placeholder = multiple ? 'Select options...' : 'Select an option...',
    className,
    value,
    disabled,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const [selectedOptions, setSelectedOptions] = useState<Options>({
    values: [],
    names: [],
  });

  const listRef = useRef<(HTMLElement | null)[]>([]);
  const listContentRef = useRef<(string | null)[]>(options.map((option) => option.name));
  const isTypingRef = useRef(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [flip(), offset(7)],
  });

  const click = useClick(context, { event: 'mousedown' });
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'listbox' });

  const listNav = useListNavigation(context, {
    listRef,
    activeIndex,
    selectedIndex,
    onNavigate: setActiveIndex,
    loop: true,
  });

  const typeahead = useTypeahead(context, {
    listRef: listContentRef,
    activeIndex,
    selectedIndex,
    onMatch: isOpen ? setActiveIndex : setSelectedIndex,
    onTypingChange(isTyping) {
      isTypingRef.current = isTyping;
    },
  });

  const { isMounted, styles } = useTransitionStyles(context, {
    duration: {
      open: 200,
      close: 100,
    },
  });

  const { getReferenceProps, getFloatingProps, getItemProps } = useInteractions([
    dismiss,
    role,
    listNav,
    typeahead,
    click,
  ]);

  const handleSelect = (index: number, name: string, value: string) => {
    setSelectedOptions((prev) => {
      let updatedName;
      let updatedValue;

      if (multiple) {
        const nameIndex = prev.names.indexOf(name);
        const valueIndex = prev.values.indexOf(value);

        if (nameIndex !== -1 && valueIndex !== -1) {
          updatedValue = prev.values.filter((_, i) => i !== valueIndex);
          updatedName = prev.names.filter((_, i) => i !== nameIndex);
        } else {
          updatedValue = [...prev.values, value];
          updatedName = [...prev.names, name];
        }
      } else {
        updatedValue = [value];
        updatedName = [name];
      }

      const newOptions = { values: updatedValue, names: updatedName };

      const selectValue = multiple ? newOptions.values : value;

      onChange(selectValue as T);

      return newOptions;
    });

    setSelectedIndex(index);
    if (!multiple) {
      setIsOpen(false);
    }
  };

  const showSelected = () => {
    if (multiple) {
      return selectedOptions.names?.length > 0
        ? selectedOptions.names?.join(', ')
        : placeholder;
    } else {
      return selectedOptions.names.length ? selectedOptions.names : placeholder;
    }
  };

  useEffect(() => {
    if (value === undefined) return;

    if (typeof value === 'string') {
      const initValue = options.find((el) => el.value === value);

      if (initValue)
        setSelectedOptions({ names: [initValue.name], values: [initValue.value] });
    }

    if (Array.isArray(value) && value.length) {
      const initValue = value.reduce(
        (acc, val) => {
          if (options && options.length > 0) {
            const option = options.find((opt) => opt.value === val);

            if (option) {
              acc.names.push(option.name);
              acc.values.push(option.value);
            }
          }
          return acc;
        },
        { names: [], values: [] } as Options
      );

      if (initValue.values) {
        setSelectedOptions({
          names: initValue.names,
          values: initValue.values,
        });
      }
    }
  }, [options, value]);

  return (
    <div
      className={classNames(cls.select_container, disabled && cls.disabled, className)}
      tabIndex={-1}
    >
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className={classNames(
          cls.selected_values,
          !selectedOptions.names.length && cls.placeholder_color
        )}
        tabIndex={0}
      >
        {showSelected()}
      </div>
      {isMounted && (
        <FloatingFocusManager
          context={context}
          modal={false}
        >
          <ul
            style={{ ...styles, ...floatingStyles }}
            ref={refs.setFloating}
            {...getFloatingProps()}
            className={cls.options_list}
          >
            {options.map((option, index) => (
              <li
                ref={(node) => {
                  listRef.current[index] = node;
                }}
                tabIndex={activeIndex === index ? 0 : -1}
                role='option'
                {...getItemProps({
                  onClick() {
                    handleSelect(index, option.name, option.value);
                  },

                  onKeyDown(event) {
                    if (event.key === 'Enter') {
                      event.preventDefault();
                      handleSelect(index, option.name, option.value);
                    }

                    if (event.key === ' ' && !isTypingRef.current) {
                      event.preventDefault();
                      handleSelect(index, option.name, option.value);
                    }
                  },
                })}
                className={classNames(
                  selectedOptions.names.includes(option.name) ? cls.selected : '',
                  index === activeIndex ? cls.focused : ''
                )}
                key={option.value}
              >
                {option.name}
              </li>
            ))}
          </ul>
        </FloatingFocusManager>
      )}
    </div>
  );
};

export const CustomSelect = memo(CustomSelectComponent) as typeof CustomSelectComponent;
