
import styles from './styles.module.css'

interface TextProps extends React.SVGTextElementAttributes<SVGTextElement>{
    children: React.ReactNode;
}
export const Text: React.FC<TextProps> = ({ children, ...props }) => {
    return(
        <text className={styles.text} {...props}>{children}</text>
    )
}