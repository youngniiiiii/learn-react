import FooterBar from './FooterBar'
import HeaderBar from './HeaderBar'

function RootLayout(props) {
  console.log(props.children)
  return (
    <div>
      <HeaderBar />
      <main>{props.children}</main>
      <FooterBar />
    </div>
  )
}
export default RootLayout
