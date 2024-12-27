import C from "../container/container.module.scss";

const FondSvg = ({ children, backgroundColor }) => {
    const style = {
        backgroundColor: backgroundColor,
    }
    return(<>
        <div className={C.FondSvg} style={style}>
            {children}
        </div>
    </>)
}

export default FondSvg