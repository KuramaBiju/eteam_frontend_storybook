import React from "react";
import { Button } from "../";

interface Props {
  isCreateMember?: boolean;
  page: number;
  setPage: (page: Props["page"]) => void;
  maxPage: number;
  className?:string;
}

export const Pagination = ({ isCreateMember, page, setPage,maxPage,className }: Props) => {
  return (
    <>
      {isCreateMember && (
        <div className={`container flex justify-between p-6 rounded-lg  mt-6 ${className} `}>
          {
            page > 1 && <Button type="button" typeButton="button-pagination" text="Previous" clickHandler={() => setPage(page - 1)} />
          }
          {
            page < maxPage && <Button type="button" typeButton="button-pagination" text="Next" clickHandler={() => setPage(page + 1)} /> 
          }
          
        </div>
      )}
    </>
  );
};
