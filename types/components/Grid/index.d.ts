import 'modern-normalize/modern-normalize.css';
import '../../reset.css';
import type { HTMLAttributes } from 'react';
import type { Sprinkles } from '../../layout.css';
type Spacing = Sprinkles['gap'];
type GridTemplateColumns = Sprinkles['gridTemplateColumns'];
type GridColumnStart = Sprinkles['gridColumnStart'];
type GridColumnEnd = Sprinkles['gridColumnEnd'];
type GridRowStart = Sprinkles['gridRowStart'];
type GridRowEnd = Sprinkles['gridRowEnd'];
export type GridProps = {
    component?: React.ElementType;
    gridTemplateColumns?: GridTemplateColumns;
    gridTemplateRows?: GridTemplateColumns;
    columnSpacing?: Spacing;
    rowSpacing?: Spacing;
    className?: string;
    children?: React.ReactNode[] | React.ReactNode;
} & React.HTMLProps<HTMLElement> & HTMLAttributes<HTMLElement>;
/**
 * @name Grid component
 * Gridを表示するコンポーネント
 *
 * Default Column Grid Lines are 13 lines, which starts from 1 and ends in 13.
 * Default Row Grid Lines are 13 lines, which starts from 1 and ends in 13.
 * The expected use case is to use the GridItem component to define from which line to which line the item should be placed.
 *
 * The first GridItem's gridColumnStart should be start with 1 and the last GridItem's gridColumnEnd should be end with 13 to get the normal behavior.
 *
 * You're allowed to adjust the number of Grid Lines by passing the gridTemplateColumns and gridTemplateRows props, but you're required to adjust the GridItem's gridColumnStart and gridColumnEnd as well.
 * @param {number} a - props a
 * @returns {JSX.Element}
 * @example <Grid a={1} />
 */
declare const Grid: import("react").ForwardRefExoticComponent<Omit<GridProps, "ref"> & import("react").RefAttributes<HTMLElement>>;
export type GridItemProps = {
    component?: React.ElementType;
    gridColumnStart?: GridColumnStart;
    gridColumnEnd?: GridColumnEnd;
    gridRowStart?: GridRowStart;
    gridRowEnd?: GridRowEnd;
    className?: string;
    children?: React.ReactNode[] | React.ReactNode;
} & React.HTMLProps<HTMLElement> & HTMLAttributes<HTMLElement>;
declare const GridItem: import("react").ForwardRefExoticComponent<Omit<GridItemProps, "ref"> & import("react").RefAttributes<HTMLElement>>;
export { Grid, GridItem };
//# sourceMappingURL=index.d.ts.map