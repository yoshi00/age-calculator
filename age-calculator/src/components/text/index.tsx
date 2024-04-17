import './styles.css'

interface TextProps extends React.SVGTextElementAttributes<SVGTextElement> {
  style?: React.CSSProperties
  children: React.ReactNode
}
export const Text: React.FC<TextProps> = ({ style, children, ...props }) => {
  return (
    <text className="text" style={style} {...props}>
      {children}
    </text>
  )
}
