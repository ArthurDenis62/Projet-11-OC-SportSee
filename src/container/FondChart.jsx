import C from './container.module.scss'

const FondChart = ({ children, width, height, padding,backgroundColor, borderRadius }) => {
    const style = {
        width: width,
        height: height,
        padding: padding,
        backgroundColor: backgroundColor,
        borderRadius: borderRadius,
    }
    return(<>
        <div className={C.container} style={style}>
            {children}
        </div>
    </>)
}

export default FondChart