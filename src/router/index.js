import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import About from '@/components/About'
import Casino from '@/components/Casino'

import Contact from '@/components/Contact'
import Disclaimer from '@/components/Disclaimer'
import Duty from '@/components/Duty'
import Help from '@/components/Help'

import Join from '@/components/Join'
import Live from '@/components/Live'
import Lottery from '@/components/Lottery'
import PersonalBettin from '@/components/PersonalBettin'

import PersonalCallin from '@/components/PersonalCallin'
import PersonalCallinEdit from '@/components/PersonalCallinEdit'
import PersonalCallin1 from '@/components/PersonalCallin1'
import PersonalDeposit from '@/components/PersonalDeposit'

import PersonalDeposit11 from '@/components/PersonalDeposit11'
import PersonalFunds from '@/components/PersonalFunds'
import PersonalInfo from '@/components/PersonalInfo'
import PersonalModifyPassword from '@/components/PersonalModifyPassword'

import PersonalMsg from '@/components/PersonalMsg'
import Policy from '@/components/Policy'
import Promo from '@/components/Promo'
import SignUp from '@/components/SignUp'

import Sports from '@/components/Sports'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/casino',
      name: 'Casino',
      component: Casino
    },

    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/disclaimer',
      name: 'Disclaimer',
      component: Disclaimer
    },
    {
      path: '/duty',
      name: 'Duty',
      component: Duty
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/live',
      name: 'Live',
      component: Live
    },
    {
      path: '/lottery',
      name: 'Lottery',
      component: Lottery
    },
    {
      path: '/personal-bettin',
      name: 'PersonalBettin',
      component: PersonalBettin
    },

    {
      path: '/personal-callin',
      name: 'PersonalCallin',
      component: PersonalCallin
    },
    {
      path: '/personal-callin_edit',
      name: 'PersonalCallinEdit',
      component: PersonalCallinEdit
    },
    {
      path: '/personal-callin1',
      name: 'PersonalCallin1',
      component: PersonalCallin1
    },
    {
      path: '/personal-deposit',
      name: 'PersonalDeposit',
      component: PersonalDeposit
    },

    {
      path: '/personal-deposit1_1',
      name: 'PersonalDeposit11',
      component: PersonalDeposit11
    },
    {
      path: '/personal-funds',
      name: 'PersonalFunds',
      component: PersonalFunds
    },
    {
      path: '/personal-info',
      name: 'PersonalInfo',
      component: PersonalInfo
    },
    {
      path: '/personal-modify-password',
      name: 'PersonalModifyPassword',
      component: PersonalModifyPassword
    },

    {
      path: '/personal-msg',
      name: 'PersonalMsg',
      component: PersonalMsg
    },
    {
      path: '/policy',
      name: 'Policy',
      component: Policy
    },
    {
      path: '/promo',
      name: 'Promo',
      component: Promo
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/sports',
      name: 'Sports',
      component: Sports
    }

  ]
})
