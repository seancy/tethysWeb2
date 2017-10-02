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

import PersonalBettin from '@/components/person/PersonalBettin'

import PersonalCallin from '@/components/person/PersonalCallin'
import PersonalCallinEdit from '@/components/person/PersonalCallinEdit'
import PersonalCallin1 from '@/components/person/PersonalCallin1'
import PersonalDeposit from '@/components/person/PersonalDeposit'

import PersonalDeposit11 from '@/components/person/PersonalDeposit11'
import PersonalFunds from '@/components/person/PersonalFunds'
import PersonalInfo from '@/components/person/PersonalInfo'
import PersonalModifyPassword from '@/components/person/PersonalModifyPassword'

import PersonalMsg from '@/components/person/PersonalMsg'

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
      path: '/bettin',
      name: 'Bettin',
      component: PersonalBettin
    },

    {
      path: '/callin',
      name: 'Callin',
      component: PersonalCallin
    },
    {
      path: '/callinEdit',
      name: 'CallinEdit',
      component: PersonalCallinEdit
    },
    {
      path: '/callin1',
      name: 'Callin1',
      component: PersonalCallin1
    },
    {
      path: '/deposit',
      name: 'Deposit',
      component: PersonalDeposit
    },

    {
      path: '/deposit1_1',
      name: 'Deposit11',
      component: PersonalDeposit11
    },
    {
      path: '/funds',
      name: 'Funds',
      component: PersonalFunds
    },
    {
      path: '/info',
      name: 'Info',
      component: PersonalInfo
    },
    {
      path: '/modifyPassword',
      name: 'ModifyPassword',
      component: PersonalModifyPassword
    },

    {
      path: '/msg',
      name: 'Msg',
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
