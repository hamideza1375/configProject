import { useNavigation } from '@react-navigation/native';
import Axios from 'axios';
// import { Platform } from 'react-native';
// import backgroundTimer from '../utils/backgroundTimer'


// const beforeUnloadListener = (event) => {
//   event.preventDefault();
//   if (Platform.OS === 'web') {
//     return event.returnValue = "آیا سفارشتان را به پایان رساندین و خارج میشوید؟";
//   }
// };

// Platform.OS === 'web' && removeEventListener("beforeunload", beforeUnloadListener, { capture: true });

// Platform.OS === 'web' && addEventListener("beforeunload", beforeUnloadListener, { capture: true });


export function foodState(p) {



}




//home
export const home = (p) => {

  const navigation = useNavigation()
  p.useEffect(() => {
    var toastOK = () => { p.toast.success('موفق آمیز', '✅', 4000) }
    var toast500 = () => { p.toast.error('خطا', 'مشکلی از سمت سرور پیش آمده'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast400 = () => { p.toast.error('خطا', 'اصلاح کنید و دوباره امتحان کنید'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast399 = () => { p.toast.error('خطا', 'کد وارد شده اشتباه هست'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast398 = () => { p.toast.error('خطا', 'شما قبلا ثبت نام کردید'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast397 = () => { p.toast.error('خطا', 'شما قبلا ثبت نام نکرده این و یا مشخصاتتان را اشتباه وارد کردین'); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }
    var toast395 = () => { p.toast.error('خطا', 'شما هنوز انتخابی نکردین', 3000); p.setRand(parseInt(Math.random() * 9000 + 1000)); p.refInput.current && p.refInput.current.setNativeProps({ text: '' }); p.setcaptcha('') }

    Axios.interceptors.response.use(function (response) {
      // if (response.config.method !== 'get' && navigation.getCurrentRoute()?.name !== 'Payment' && navigation.getCurrentRoute()?.name !== 'Home' && navigation.getCurrentRoute()?.name !== 'FinallFoodPayment' && navigation.getCurrentRoute()?.name !== 'ChildFood' && navigation.getCurrentRoute()?.name !== 'Location'  && (response.status === 200 || response.status === 201)) toastOK()
        if(response.config.method !== 'get' && (response.status === 200 || response.status === 201)) toastOK()
        p.setshowActivity(false)
        return response
    }, function (error) {
      if (error?.response?.status) {
        if (error.response.status > 400 && error.response.status <= 500) { toast500() };
        if (error.response.status === 400) { toast400() };
        if (error.response.status === 399) { toast399() };
        if (error.response.status === 398) { toast398() };
        if (error.response.status === 397) { toast397() };
        if (error.response.status === 395) { toast395() };
        p.setshowActivity(false)
      } return Promise.reject(error);
    });

  }, [])



  p.Dimensions.addEventListener('change', ({ window: { width, height } }) => {
    p.setwidth(width); p.setheight(height)
  })


  p.useEffect(() => {
    (async () => {
      p.localStorage.getItem("token").then((token) => {
        if (token) {
          const user = p.jwt_decode(token)
          p.settokenValue(user)
        }
      })
    })()
  }, [])


  p.useMemo(() => {
    setTimeout(() => {
      p.setSplash(false)
    }, 1000)
  }, [])




  // p.useMemo(() => {
  //   (async () => {
  //     let newNotification = await p.localStorage.getItem('notification')
  //     const { data } = await p.notification()
  //     if (data)
  //       if (data.message && newNotification !== data.message) {
  //         p.create(data.title, data.message, require('../assets/images/logo.jpg'))
  //         await p.localStorage.setItem('notification', data.message)
  //       }
  //   })();

  //   Platform.OS === 'web' ?
  //     backgroundTimer(async () => {
  //       (async () => {
  //         let newNotification = await p.localStorage.getItem('notification')
  //         const { data } = await p.notification()
  //         if (data)
  //           if (data.message && newNotification !== data.message) {
  //             p.create(data.title, data.message, require('../assets/images/logo.jpg'))
  //             await p.localStorage.setItem('notification', data.message)
  //           }
  //       })();
  //     }, 15000)

  //     :
  //     backgroundTimer.runBackgroundTimer(async () => {
  //       (async () => {
  //         let newNotification = await p.localStorage.getItem('notification')
  //         const { data } = await p.notification()
  //         if (data)
  //           if (data.message && newNotification !== data.message) {
  //             p.create(data.title, data.message, require('../assets/images/logo.jpg'))
  //             await p.localStorage.setItem('notification', data.message)
  //           }
  //       })();
  //     }, 15000);

  // }, [p.width])



}
//home


