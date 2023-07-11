import './Toast.scss';
import { animated, useSpring } from '@react-spring/web'
import {forwardRef, useImperativeHandle} from 'react';
import Image from 'next/image';
import { useRecoilState } from 'recoil';
import { toastState } from '../recoil/user';

import icon_check_circle from '@/app/assets/icons/icon_check-circle.png';


interface props {
    message: string;
}

// eslint-disable-next-line react/display-name
export const Toast = forwardRef((props: props, ref) => {
    const [toast, setToast] = useRecoilState(toastState);

    const [springs, api] = useSpring(() => ({
        top: -60,
        config: {
            mass: 2,
            friction: 37,
            tension: 400,
          },
          onRest(result) {
              if(result.value.top === -60) {
                setToast({
                    visible: false,
                    message: "",
                    type: "",
                })
              }
          },

    }))

    useImperativeHandle(ref, () => ({
        show
    }))

    const show = () => {
        api.start({
            from: {
                top: -60
            },
            to: {
                top: 40
            }
        })

        setTimeout(() => {
            hide();
        }, 1300)
    }

    const hide =  () => {
        api.start({
            from: {
                top: 40
            },
            to: {
                top: -60
            }
        })


    }
    

    return (
        <animated.div
        style={{
            ...springs
        }}
        className='toast'>
            <Image
            width={24}
            height={24}
            alt={"icon_check_circle"}
            src={toast.type === "confirm" ? icon_check_circle : ""}/>
            {toast.message}
        </animated.div>
    )
});

