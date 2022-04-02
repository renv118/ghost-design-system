import React, { ReactElement } from 'react';
import classnames from 'classnames';

import { ICellProps } from './types';
import { IColumnCode } from '../types';
import { TextField } from '../../../../Molecules/TextField';

const CodeCell = <T,>(props: ICellProps<T, IColumnCode<T>>): ReactElement => {
  const { column, forcedValue, row, rowIndex } = props;

  const displayValue = (forcedValue || (row && row[column.dataIndex])) as string | undefined;

  return (
    <td
      className={classnames({ ellipsis: column.ellipsis }, 'table--cell--code')}
      style={{ display: column.hidden ? 'none' : undefined }}
      data-testid={`${column.dataIndex}-${rowIndex}`}>
      <TextField
        dataTestId={`${column.dataIndex}-${rowIndex}`}
        inputClassName={classnames('gds-typography', { ellipsis: column.ellipsis })}
        inputValue={displayValue}
        name={String(column.dataIndex)}
        readOnly
      />
    </td>
  );
};

export default CodeCell;
