import C from './container.module.scss'

const FondChart = ({ children, width, height, padding }) => {
    const style = {
        width: width,
        height: height,
        padding: padding
    }
    return(<>
        <div className={C.container} style={style}>
            {children}
        </div>
    </>)
}

export default FondChart