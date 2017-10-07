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
import PersonalDeposit0 from '@/components/person/PersonalDeposit0'
import PersonalDeposit1 from '@/components/person/PersonalDeposit1'
import PersonalDeposit2 from '@/components/person/PersonalDeposit2'
import PersonalDeposit3 from '@/components/person/PersonalDeposit3'

// import PersonalDeposit11 from '@/components/person/PersonalDeposit11'
import PersonalFunds from '@/components/person/PersonalFunds'
import PersonalInfo from '@/components/person/PersonalInfo'

import PersonalMsg from '@/components/person/PersonalMsg'
import Policy from '@/components/Policy'
import Promo from '@/components/Promo'
import SignUp from '@/components/SignUp'

import Sports from '@/components/Sports'

const PersonalModifyPassword = () => import('@/components/person/PersonalModifyPassword')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/personalModifyPassword',
      name: 'PersonalModifyPassword',
      component: PersonalModifyPassword
    },
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
      path: '/personalBettin',
      name: 'PersonalBettin',
      component: PersonalBettin
    },

    {
      path: '/personalCallin',
      name: 'PersonalCallin',
      component: PersonalCallin
    },
    {
      path: '/personalCallin_edit',
      name: 'PersonalCallinEdit',
      component: PersonalCallinEdit
    },
    {
      path: '/personalCallin1',
      name: 'PersonalCallin1',
      component: PersonalCallin1
    },
    {
      path: '/personalDeposit',
      name: 'PersonalDeposit',
      component: PersonalDeposit
    },
    {
      path: '/personalDeposit0',
      name: 'PersonalDeposit0',
      component: PersonalDeposit0
    },

    {
      path: '/personalDeposit1',
      name: 'PersonalDeposit11',
      component: PersonalDeposit1
    },
    {
      path: '/personalDeposit2',
      name: 'PersonalDeposit12',
      component: PersonalDeposit2
    },
    {
      path: '/personalDeposit3',
      name: 'PersonalDeposit13',
      component: PersonalDeposit3
    },


    {
      path: '/personalFunds',
      name: 'PersonalFunds',
      component: PersonalFunds
    },
    {
      path: '/personalInfo',
      name: 'PersonalInfo',
      component: PersonalInfo
    },

    {
      path: '/personalMsg',
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
      path: '/signUp',
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
