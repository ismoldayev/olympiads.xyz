import { Link } from 'gatsby';
import * as React from 'react';

export default function WelcomeBackBanner({
  lastViewedModuleURL,
  lastViewedModuleLabel,
}) {
  return (
    <div className="bg-blue-700 dark:bg-blue-900 shadow hover:shadow-lg transition lg:rounded-lg w-full">
      <Link
        className="px-4 py-6 sm:p-8 block sm:flex sm:items-center sm:justify-between"
        to={lastViewedModuleURL || '/general/introduction'}
      >
        <div>
          <h3 className="text-xl sm:text-2xl leading-7 font-medium text-white dark:text-dark-high-emphasis">
            {lastViewedModuleURL
              ? 'Отново заедно!'
              : 'Добре дошли в Olympiads.xyz!'}
          </h3>
          <div className="mt-2 text-teal-200 dark:text-teal-300">
            <p>
              {lastViewedModuleURL
                ? `Продължете откъдето сте спрели. Последният Ви прегледан модул беше "${lastViewedModuleLabel}."`
                : `Започнете с първия модул, "Въведение"`}
            </p>
          </div>
        </div>
        <div className="mt-5 sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center lg:mr-2">
          <span className="inline-flex rounded-md shadow-sm">
            <span className="inline-flex items-center px-4 lg:px-8 py-2 lg:py-3 border border-transparent text-sm sm:text-base lg:text-lg font-medium rounded-md text-white bg-blue-800 hover:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue active:bg-blue-700 transition ease-in-out duration-150">
              {lastViewedModuleURL
                ? `Продължете: ${lastViewedModuleLabel}`
                : `Първи стъпки: Въведение!`}
            </span>
          </span>
        </div>
      </Link>
    </div>
  );
}
