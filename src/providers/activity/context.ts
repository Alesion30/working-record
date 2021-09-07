import { createContext } from "react";
import {
  CommitResponse,
  PrCommentResponse,
  TypeNumResponse,
  WorkTimeResponse,
} from "~/data/remote/activity";
import { Dayjs } from "~/plugins/dayjs";

export type ActivityContextProps = {
  isLoading: boolean;
  date: Dayjs;
  setDate: React.Dispatch<React.SetStateAction<Dayjs>>;
  workTime: WorkTimeResponse;
  commit: CommitResponse;
  typeNum: TypeNumResponse;
  prComment: PrCommentResponse;
  fetchData: (date: Dayjs) => void;
};

export const ActivityContext = createContext<ActivityContextProps>({
  isLoading: false,
  date: null,
  setDate: () => {},
  workTime: null,
  commit: null,
  typeNum: null,
  prComment: null,
  fetchData: () => {},
});
