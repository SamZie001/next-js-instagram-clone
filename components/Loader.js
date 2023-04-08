import loaderStyles from '../styles/Loader.module.css'

const Loader = () => {
  return (
    <div className={loaderStyles['load-container']}>
      <div className={loaderStyles.slider}></div>
    </div>
  )
}

export default Loader