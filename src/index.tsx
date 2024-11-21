// 1- WORKS:

// import { Column, TableHeader, type TableHeaderProps } from "react-aria-components";

// export interface MyTableHeaderProps extends TableHeaderProps<object> {
//     foo: string;
// }

// export function MyTableHeader({ foo, ...props }: MyTableHeaderProps) {
//     return (
//         <TableHeader {...props}>
//             <Column>{foo}</Column>
//         </TableHeader>
//     )
// }

// 2- WORKS:

// import type { ComponentProps } from "react";
// import { Column, TableHeader, type TableHeaderProps } from "react-aria-components";

// export interface MyTableHeaderProps extends ComponentProps<typeof TableHeader> {
//     foo: string;
// }

// export function MyTableHeader({ foo, ...props }: MyTableHeaderProps) {
//     return (
//         <TableHeader {...props}>
//             <Column>{foo}</Column>
//         </TableHeader>
//     )
// }

// 3- DOESN'T WORKS:

// import { THead as OrbiterTableHeader, as } from "@workleap/orbiter-ui";
// import type { ComponentProps } from "react";
// import { TableHeader as ReactAriaTableHeader } from "react-aria-components";

// /** This component is a wrapper to allow the use of CSS in JS on React Aria's component */
// const InnerTableHeader = as(OrbiterTableHeader, ReactAriaTableHeader);

// export type TableHeaderProps = ComponentProps<typeof InnerTableHeader>;

// export const TableHeader = ({ children, ...rest }: TableHeaderProps) => (
//     <InnerTableHeader textAlign="left" height="3rem" {...rest}>
//         {children}
//     </InnerTableHeader>
// );
