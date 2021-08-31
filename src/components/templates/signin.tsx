// ********************************************************************************
// ログインページ レイアウト
// ********************************************************************************

import { VFC } from "react";
import Head from "next/head";
import appConfig from "~/config/app";
import { LockClosedIcon } from "@heroicons/react/solid";

export type SigninLayoutProps = {};

export const SigninLayout: VFC<SigninLayoutProps> = ({}) => {
  return (
    <div>
      <Head>
        <title>{appConfig.title}</title>
      </Head>
      <main className="bg-gray-50">
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-12 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                alt="Workflow"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <div>
              <button
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-gray-500 group-hover:text-gray-400"
                    aria-hidden="true"
                  />
                </span>
                GitHubアカウントでログイン
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
