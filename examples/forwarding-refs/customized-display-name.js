function logProps(Component) {
  class LogProps extends React.Component {
    // ...
  }

  function forwardRef(props, ref) {
    return <LogProps {...props} forwardedRef={ref} />;
  }

  // ניתן לקומפוננטה שם יותר מועיל שיוצג בכלי הפיתוח
  // "ForwardRef(logProps(MyComponent))" לדוגמא
  // highlight-range{1-2}
  const name = Component.displayName || Component.name;
  forwardRef.displayName = `logProps(${name})`;

  return React.forwardRef(forwardRef);
}
