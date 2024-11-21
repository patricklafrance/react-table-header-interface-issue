# react-table-header-interface-issue

## Issue

In the source code of RAC, the [TableHeaderRenderProps](https://github.com/adobe/react-spectrum/blob/main/packages/react-aria-components/src/Table.tsx#L525) interface is exported.

However, somehow, in the distributed package, the `dist/types.d.ts` file doesn't export the `TableHeaderRenderProps` interface.

```
interface TableHeaderRenderProps {
    /**
     * Whether the table header is currently hovered with a mouse.
     * @selector [data-hovered]
     */
    isHovered: boolean;
}
export interface TableHeaderProps<T> extends StyleRenderProps<TableHeaderRenderProps>, _HoverEvents1 {
    /** A list of table columns. */
    columns?: T[];
    /** A list of `Column(s)` or a function. If the latter, a list of columns must be provided using the `columns` prop. */
    children?: ReactNode | ((item: T) => ReactElement);
    /** Values that should invalidate the column cache when using dynamic collections. */
    dependencies?: any[];
}
```

This result in an error when a consumer lib extending the `TableHeaderProps` interface is compiled with `--declaration` flag:

```
../components/src/table/TableHeader.tsx(6,7): error TS4023: Exported variable 'InnerTableHeader' has or is using name 'TableHeaderRenderProps' from external module "XYZ/node_modules/.pnpm/react-aria-components@1.4.1_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-aria-components/dist/types" but cannot be named.
```

## To reproduce the issue:

- `pnpm install`
- `pnpm build`
