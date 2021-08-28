const Features = (props) => {
  return (
    <div className="col-md-4 col-12 shadow p-3">
      <div className="text-center">
        <div className="mb-4">
          <i className={props.item.iconClass}></i>
          <div>
            <h3>{props.item.title}</h3>
          </div>
        </div>
        <div>
            {props.item.desc}
        </div>
      </div>
    </div>
  );
};

export default Features;
