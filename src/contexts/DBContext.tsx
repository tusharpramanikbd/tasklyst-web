// import { createContext, useContext, type ReactNode } from "react";
// import useDBTaskManager from "@/hooks/useDBTaskManager";

// const DBContext = createContext<ReturnType<typeof useDBTaskManager> | null>(
//   null,
// );

// export const DBProvider = ({ children }: { children: ReactNode }) => {
//   const taskManager = useDBTaskManager();

//   return (
//     <DBContext.Provider value={taskManager}>{children}</DBContext.Provider>
//   );
// };

// // eslint-disable-next-line react-refresh/only-export-components
// export const useDBContext = () => {
//   const context = useContext(DBContext);
//   if (!context) {
//     throw new Error("useDBContext must be used within a DBProvider");
//   }
//   return context;
// };
