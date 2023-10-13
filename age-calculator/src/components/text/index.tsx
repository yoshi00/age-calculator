
import styles from './styles.module.css'

interface TextProps extends React.SVGTextElementAttributes<SVGTextElement>{
    children: React.ReactNode;
    style?: React.CSSProperties
}
export const Text: React.FC<TextProps> = ({ style, children, ...props }) => {
    return(
        <text className={styles.text} style={style} {...props}>{children}</text>
    )
}