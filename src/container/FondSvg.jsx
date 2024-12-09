import C from './container.module.scss'

const FondSvg = ({ children, width, height, padding, color }) => {
    const style = {
        width: width,
        height: height,
        padding: padding,
        color: color
    }
    return(<>
        <div className={C.container} style={style}>
            {children}
        </div>
    </>)
}

export default FondSvg