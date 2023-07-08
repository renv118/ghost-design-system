import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import YearCell from '../YearCell';
import { ColumnType } from '../../types';

describe('YearCell component', () => {
  it('YearCell renders', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <YearCell
              column={{
                dataIndex: 'data',
                title: 'YearCell',
                type: ColumnType.YEAR,
              }}
              row={{ data: 2022 }}
              rowIndex={0}
            />
          </tr>
        </tbody>
      </table>,
    );

    expect(container).toMatchSnapshot();
  });

  it('YearCell renders with forced value', () => {
    let container;

    act(() => {
      const renderValue = render(
        <table>
          <tbody>
            <tr>
              <YearCell
                column={{
                  dataIndex: 'data',
                  title: 'YearCell',
                  type: ColumnType.YEAR,
                }}
                forcedValue={2022}
                row={{ data: 2000 }}
                rowIndex={0}
              />
            </tr>
          </tbody>
        </table>,
      );
      container = renderValue.container;
    });

    expect(container).toMatchSnapshot();
  });

  it('YearCell renders when hidden', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <YearCell
              column={{
                dataIndex: 'data',
                hidden: true,
                title: 'YearCell',
                type: ColumnType.YEAR,
              }}
              row={{ data: 2022 }}
              rowIndex={0}
            />
          </tr>
        </tbody>
      </table>,
    );

    expect(container).toMatchSnapshot();
  });

  it('YearCell renders in edit mode and handles change', async () => {
    const onChangeMock = jest.fn().mockImplementation(() => {});

    let container;

    act(() => {
      const renderValue = render(
        <table>
          <tbody>
            <tr>
              <YearCell
                column={{
                  dataIndex: 'data',
                  title: 'YearCell',
                  type: ColumnType.YEAR,
                }}
                editing
                onChange={onChangeMock}
                row={{ data: 2022 }}
                rowIndex={0}
              />
            </tr>
          </tbody>
        </table>,
      );
      container = renderValue.container;
    });

    expect(container).toMatchSnapshot();

    const dateInput = await screen.findByDisplayValue('2022');

    await act(async () => {
      await userEvent.setup({ delay: null }).clear(dateInput);
    });

    expect(onChangeMock).toBeCalledTimes(1);
    expect(onChangeMock).toBeCalledWith(undefined);

    await act(async () => {
      await userEvent.setup({ delay: null }).type(dateInput, '2000{enter}');
    });

    expect(onChangeMock).toBeCalledTimes(4);
    expect(onChangeMock).toBeCalledWith(2000);
  });

  it('YearCell renders in edit mode via extra', () => {
    const { container } = render(
      <table>
        <tbody>
          <tr>
            <YearCell
              column={{
                dataIndex: 'data',
                title: 'YearCell',
                type: ColumnType.YEAR,
              }}
              extra={{ editedRowIndex: 0 }}
              row={{ data: 2022 }}
              rowIndex={0}
            />
          </tr>
        </tbody>
      </table>,
    );

    expect(container).toMatchSnapshot();
  });
});
