declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>> | string | StaticImport;
  export default content;
}
