const PageTitle = (props: { text: string}) => {
  return (
    <h1 className="text-[var(--text-1)] text-xl font-bold text-center">
      {props.text}
    </h1>
  )
};

export default PageTitle;