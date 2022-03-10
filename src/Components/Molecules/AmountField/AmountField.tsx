import React from 'react';
import classnames from 'classnames';

import { GenericField, AmountInput, ThousandsGroupStyle } from '../../Atoms';

export interface IAmountFieldProps {
  /** Allows negative values (optional, default: true) */
  allowNegative?: boolean;
  /** For test purpose only */
  dataTestId?: string;
  /** Decimal scale (optional, default: 2) */
  decimalScale?: number;
  /** Decimal separator (optional, default: '.') */
  decimalSeparator?: string;
  /** Disabled field (optional, default: false) */
  disabled?: boolean;
  /** Error message (optional, default: undefined) */
  errorMessage?: string;
  /** Class for the field surrounding the input (optional, default: undefined) */
  fieldClassName?: string;
  /** Size of the field in a 12 column grid (optional, default: undefined) */
  fieldSize?: number;
  /** Helper text (optional, default: undefined) */
  helperText?: string;
  /** Highlighted field (optional, default: false) */
  highlighted?: boolean;
  /** Inline field (optional, default: false) */
  inline?: boolean;
  /** Class for the input (optional, default: undefined) */
  inputClassName?: string;
  /** Input number value (optional, default: undefined) */
  inputValue?: string | number;
  /** Label (optional, default: undefined) */
  label?: string;
  /** Size of the field in a 12 column grid (optional, default: undefined) */
  labelSize?: number;
  /** Mandatory field (optional, default: false) */
  mandatory?: boolean;
  /** Max value (optional, default: undefined) */
  maxValue?: number;
  /** Min value (optional, default: undefined) */
  minValue?: number;
  /** Name of text field */
  name: string;
  /** Handler of value changes (optional, default: undefined) */
  onChange?: (value: number | undefined) => void;
  /** Placeholder value (optional, default: undefined) */
  placeholder?: string;
  /** Prefix (optiona, default: undefined) */
  prefix?: string | undefined;
  /** Read only field (optional, default: false) */
  readOnly?: boolean;
  /** Suffix (optional, default: undefined) */
  suffix?: string | undefined;
  /** Thousand separator (optional, default: ',')*/
  thousandSeparator?: string;
  /** Thousands grouping style (default: ThousandsGroupStyle.THOUSAND )*/
  thousandsGroupStyle?: ThousandsGroupStyle;
}

/**
 * Amount field component
 *
 * Date picker input wrapped in a generic field ( @see GenericField ).
 *
 * Calls @param onChange for every input change.
 *
 */
export const AmountField = (props: IAmountFieldProps): React.ReactElement => {
  const {
    allowNegative,
    dataTestId,
    decimalScale,
    decimalSeparator,
    disabled,
    errorMessage,
    fieldClassName,
    fieldSize,
    helperText,
    highlighted,
    inline,
    inputClassName,
    inputValue,
    label,
    labelSize,
    mandatory,
    maxValue,
    minValue,
    name,
    onChange,
    placeholder,
    prefix,
    readOnly,
    suffix,
    thousandSeparator,
    thousandsGroupStyle,
  } = props;

  return (
    <GenericField
      errorMessage={errorMessage}
      fieldClassName={fieldClassName}
      helperText={helperText}
      highlighted={highlighted}
      inline={inline}
      label={label}
      labelSize={labelSize}
      mandatory={mandatory}
      readOnly={readOnly}>
      <AmountInput
        allowNegative={allowNegative}
        className={classnames(fieldSize && `field-input-size-${fieldSize}`, inputClassName)}
        dataTestId={dataTestId}
        decimalScale={decimalScale}
        decimalSeparator={decimalSeparator}
        disabled={disabled}
        fieldSize={fieldSize}
        highlighted={highlighted}
        inputValue={inputValue}
        isInError={errorMessage !== undefined}
        maxValue={maxValue}
        minValue={minValue}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        prefix={prefix}
        readOnly={readOnly}
        suffix={suffix}
        thousandSeparator={thousandSeparator}
        thousandsGroupStyle={thousandsGroupStyle}
      />
    </GenericField>
  );
};

AmountField.defaultProps = {
  allowNegative: true,
  decimalScale: 2,
  decimalSeparator: '.',
  disabled: false,
  errorMessage: undefined,
  fieldClassName: undefined,
  fieldSize: undefined,
  helperText: undefined,
  highlighted: false,
  inline: false,
  inputClassName: undefined,
  inputValue: undefined,
  label: undefined,
  labelSize: undefined,
  mandatory: false,
  maxValue: undefined,
  minValue: undefined,
  onChange: undefined,
  placeholder: undefined,
  prefix: undefined,
  readOnly: false,
  suffix: undefined,
  thousandSeparator: ',',
  thousandsGroupStyle: ThousandsGroupStyle.THOUSAND,
};

export default AmountField;
