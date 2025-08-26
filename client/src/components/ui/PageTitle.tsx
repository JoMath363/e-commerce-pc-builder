const PageTitle = (props: { text: string}) => {
  return (
    <h1 className="text-2xl font-bold text-center">
      {props.text}
    </h1>
  )
};

export default PageTitle;