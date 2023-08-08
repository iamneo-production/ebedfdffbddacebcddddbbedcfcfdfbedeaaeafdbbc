const Button = (props) => {
    const { btnName = props.children,onClick,marked,style } = props;
    return (
             <Button onClick={onClick} disabled={marked} className={style} >{ btnNa
             me }</button>
            )
}  
export default Button;