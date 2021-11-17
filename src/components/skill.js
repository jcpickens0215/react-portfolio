export default function Skill(props) {
    return (
        <div className="col-3">
            <i className={props.iconSource}></i>
            <h6>{props.iconName}</h6>
        </div>
    );
}

