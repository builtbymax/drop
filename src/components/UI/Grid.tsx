import clsx from "clsx";

//  --------------------------------------------------------------------------------------------
//  The default css-grid type is 'grid', but you can also pass 'flex' as a prop.
//  To use flex, you need to set the configuration in: 'styles/scss/project/config.scss' to true.
//  To add a new breakpoint for the columns, you also need to add it in the Global SCSS.
//  You can also change the Suffix for the classes in the Global SCSS.
//  --------------------------------------------------------------------------------------------

interface ColumnSize {
  xs?: number;
  xsm?: number | false;
  s?: number | false;
  sm?: number | false;
  m?: number | false;
  l?: number | false;
  xl?: number | false;
  xxl?: number | false;
  xxxl?: number | false;
  fullscreen?: number | false;
};

interface GridTypes {
  type?: string;
  children: React.ReactNode;
  className?: string;
};

interface ColumnTypes {
  type?: string;
  children: React.ReactNode;
  className?: string;
  columnSize: ColumnSize;
};

const GridRow = ({ type = 'grid', children, className }: GridTypes) => {
  return (
    <div className={clsx(`${type}-row`, className)}>
      {children}
    </div>
  );
};
GridRow.displayName = 'GridRow';

const GridColumn = ({ 
  type = 'grid',
  children,
  className,
  columnSize: { 
    xs = 12,
    xsm = false,
    s = false, 
    sm = false,
    m = false, 
    l = false, 
    xl = false, 
    xxl = false,
    xxxl = false,
    fullscreen = false,
  } = {},
}: ColumnTypes) => {
  const colClassSuffix = type === 'grid' ? 'gd' : 'fx';
  const gridClasses = clsx({
    [`${colClassSuffix}-xs-${xs}`]: xs,
    [`${colClassSuffix}-xsm-${xsm}`]: xsm,
    [`${colClassSuffix}-s-${s}`]: s,
    [`${colClassSuffix}-sm-${sm}`]: sm,
    [`${colClassSuffix}-m-${m}`]: m,
    [`${colClassSuffix}-l-${l}`]: l,
    [`${colClassSuffix}-xl-${xl}`]: xl,
    [`${colClassSuffix}-xxl-${xxl}`]: xxl,
    [`${colClassSuffix}-xxxl-${xxxl}`]: xxxl,
    [`${colClassSuffix}-fullscreen-${fullscreen}`]: fullscreen,
  });

  return (
    <div className={clsx(` ${type}-col`, gridClasses, className, )}>
      {children}
    </div>
  );
};
GridColumn.displayName = 'GridColumn';

export { GridRow, GridColumn };