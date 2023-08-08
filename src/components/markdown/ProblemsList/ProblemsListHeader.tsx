import * as React from 'react';
import TextTooltip from '../../Tooltip/TextTooltip';

type ProblemsListHeaderProps = {
  showTags: boolean;
  showDifficulty: boolean;
} & (
  | {
      isDivisionTable: true;
      showSolvePercentage: boolean;
      showModernSolvePercentageMessage: boolean;
    }
  | {
      isDivisionTable: false;
    }
);

export default function ProblemsListHeader(
  props: ProblemsListHeaderProps
): JSX.Element {
  return (
    <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 pr-4 md:pr-6">
      <th className="pl-4 py-3 text-xs leading-4 font-medium uppercase tracking-wider text-center">
        Статус
      </th>

      <th className="pl-4 md:pl-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
        {props.isDivisionTable ? 'Състезание' : 'Източник'}
      </th>

      <th className="pl-4 sm:pl-10 md:pl-12 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider whitespace-nowrap">
        Име на задача
      </th>

      {props.showDifficulty &&
        (props.isDivisionTable ? (
          props.showSolvePercentage && (
            <th className="pl-4 md:pl-6 pr-4 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
              <TextTooltip
                content={
                  props.showModernSolvePercentageMessage
                    ? 'Percentage of points scored by the top 10 USA pre-college participants.'
                    : 'Percentage of points scored by pre-college promoters. Can be interpreted as a combination of difficulty + how strong the test data is.'
                }
              >
                Процент
              </TextTooltip>
            </th>
          )
        ) : (
          <th
            className={`pr-4 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider`}
          >
            Сложност
          </th>
        ))}

      <th className="pl-4 md:pl-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
        Тагове
      </th>

      {props.isDivisionTable && (
        <th className="pl-10 md:pl-12 pr-4 md:pr-6 py-3 text-left text-xs leading-4 font-medium uppercase tracking-wider">
          Module
        </th>
      )}

      <th className="pr-2 md:pr-3 py-3 leading-4 text-left text-xs font-medium uppercase tracking-wider">
        {/*More*/}
      </th>
    </tr>
  );
}
