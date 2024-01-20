import './assets/styles/base.css'
import './assets/styles/component.css'
import './assets/styles/layout.css'
import './assets/theme/theme.css'

/* Custom components */
import Anchor from './components/custom/Anchor/Anchor'
import Appbar from './components/custom/Appbar/Appbar'
import AppbarMobile from './components/custom/Appbar/AppbarMobile'
import Avatar from './components/custom/Avatar/Avatar'
import Box from './components/custom/Box/Box'
import Button from './components/custom/Button/Button'
import Card from './components/custom/Card/Card'
import CardContent from './components/custom/Card/CardContent'
import CardFooter from './components/custom/Card/CardFooter'
import CardHeader from './components/custom/Card/CardHeader'
import CardMedia from './components/custom/Card/CardMedia'
import Container from './components/custom/Container/Container'
import Curtain from './components/custom/Curtain/Curtain'
import Footer from './components/custom/Footer/Footer'
import Form from './components/custom/Form/Form'
import Header from './components/custom/Header/Header'
import Image from './components/custom/Image/Image'
import Link from './components/custom/Link/Link'
import List from './components/custom/List/List'
import Nav from './components/custom/Nav/Nav'
import OrderedList from './components/custom/OrderedList/OrderedList'
import Section from './components/custom/Section/Section'
import Slideshow from './components/custom/Slideshow/Slideshow'
import SlideshowItem from './components/custom/Slideshow/SlideshowItem'
import SlideshowHeader from './components/custom/Slideshow/SlideshowHeader'
import SlideshowContent from './components/custom/Slideshow/SlideshowContent'
import SlideshowMedia from './components/custom/Slideshow/SlideshowMedia'
import SlideshowFooter from './components/custom/Slideshow/SlideshowFooter'
import TextArea from './components/custom/TextArea/TextArea'
import TextField from './components/custom/TextField/TextField'
import Toolbar from './components/custom/Toolbar/Toolbar'
import Typography from './components/custom/Typography/Typography'
import UnorderedList from './components/custom/UnorderedList/UnorderedList'
/* Animated icons */
import AnimatedLoadingIcon from './components/icons/animated_icons/AnimatedLoadingIcon'
/* Brand icons */
import FacebookIcon from './components/icons/brand_icons/FacebookIcon'
import FscIcon from './components/icons/brand_icons/FscIcon'
import GithubIcon from './components/icons/brand_icons/GithubIcon'
import LinkedInIcon from './components/icons/brand_icons/LinkedInIcon'
import XIcon from './components/icons/brand_icons/XIcon'
import YoutubeIcon from './components/icons/brand_icons/YoutubeIcon'
/* Interface icons */
import { AccountFilledIcon, AccountOutlinedIcon } from './components/icons/interface_icons/AccountIcon'
import { BackendOutlinedIcon } from './components/icons/interface_icons/BackendIcon'
import { CloseOutlinedIcon } from './components/icons/interface_icons/CloseIcon'
import { DatabaseFilledIcon } from './components/icons/interface_icons/DatabaseIcon'
import { DesktopOutlinedIcon } from './components/icons/interface_icons/DesktopIcon'
import { DevOpsOutlinedIcon } from './components/icons/interface_icons/DevOpsIcon'
import { EmailOutlinedIcon } from './components/icons/interface_icons/EmailIcon'
import { FrontendOutlinedIcon } from './components/icons/interface_icons/FrontendIcon'
import { InfrastructureOutlinedIcon } from './components/icons/interface_icons/InfrastructureIcon'
import { LeftArrowOutlinedIcon } from './components/icons/interface_icons/LeftArrowIcon'
import { LoginOutlinedIcon } from './components/icons/interface_icons/LoginIcon'
import { MailOutlinedIcon } from './components/icons/interface_icons/MailIcon'
import { MenuOutlinedIcon } from './components/icons/interface_icons/MenuIcon'
import { MobileOutlinedIcon } from './components/icons/interface_icons/MobileIcon'
import { MobileSettingOutlinedIcon } from './components/icons/interface_icons/MobileSettingIcon'
import { PasswordOutlinedIcon } from './components/icons/interface_icons/PasswordIcon'
import { QuoteOutlinedIcon } from './components/icons/interface_icons/QuoteIcon'
import { RightArrowOutlinedIcon } from './components/icons/interface_icons/RightArrowIcon'
import { RightChevronOutlinedIcon } from './components/icons/interface_icons/RightChevronIcon'
import { SquareFilledIcon } from './components/icons/interface_icons/SquareIcon'
import { SubmitOutlinedIcon } from './components/icons/interface_icons/SubmitIcon'
import { SuccessOutlinedIcon } from './components/icons/interface_icons/SuccessIcon'
import { WorldWideWebOutlinedIcon } from './components/icons/interface_icons/WorldWideWebIcon'
/* Tech icons */
import AngularIcon from './components/icons/tech_icons/AngularIcon'
import AwsIcon from './components/icons/tech_icons/AwsIcon'
import CPlusPlusIcon from './components/icons/tech_icons/CPlusPlusIcon'
import DjangoIcon from './components/icons/tech_icons/DjangoIcon'
import DockerIcon from './components/icons/tech_icons/DockerIcon'
import FlutterIcon from './components/icons/tech_icons/FlutterIcon'
import GitIcon from './components/icons/tech_icons/GitIcon'
import GoogleCloudIcon from './components/icons/tech_icons/GoogleCloudIcon'
import JavascriptIcon from './components/icons/tech_icons/JavascriptIcon'
import KotlinIcon from './components/icons/tech_icons/KotlinIcon'
import KubernetesIcon from './components/icons/tech_icons/KubernetesIcon'
import MongoDBIcon from './components/icons/tech_icons/MongoDBIcon'
import NodeIcon from './components/icons/tech_icons/NodeIcon'
import PostgreSQLIcon from './components/icons/tech_icons/PostgreSQLIcon'
import PythonIcon from './components/icons/tech_icons/PythonIcon'
import QtIcon from './components/icons/tech_icons/QtIcon'
import ReactIcon from './components/icons/tech_icons/ReactIcon'
import SwiftIcon from './components/icons/tech_icons/SwiftIcon'
import TerraformIcon from './components/icons/tech_icons/TerraformIcon'
import TypeScriptIcon from './components/icons/tech_icons/TypeScriptIcon'
//Utils
import useMediaQuery from './components/utils/useMediaQuery'
import withLayout from './components/utils/withLayout'

export {
  //Custom components
  Anchor,
  Appbar,
  AppbarMobile,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardMedia,
  Container,
  Curtain,
  Footer,
  Form,
  Header,
  Image,
  Link,
  List,
  Nav,
  OrderedList,
  Section,
  Slideshow,
  SlideshowItem,
  SlideshowHeader,
  SlideshowContent,
  SlideshowMedia,
  SlideshowFooter,
  TextArea,
  TextField,
  Toolbar,
  Typography,
  UnorderedList,
  //Animated icons
  AnimatedLoadingIcon,
  //Brand icons
  FacebookIcon,
  FscIcon,
  GithubIcon,
  LinkedInIcon,
  XIcon,
  YoutubeIcon,
  //Interface icons
  AccountFilledIcon,
  BackendOutlinedIcon,
  AccountOutlinedIcon,
  CloseOutlinedIcon,
  DatabaseFilledIcon,
  DesktopOutlinedIcon,
  DevOpsOutlinedIcon,
  EmailOutlinedIcon,
  FrontendOutlinedIcon,
  InfrastructureOutlinedIcon,
  LeftArrowOutlinedIcon,
  LoginOutlinedIcon,
  MailOutlinedIcon,
  MenuOutlinedIcon,
  MobileOutlinedIcon,
  MobileSettingOutlinedIcon,
  PasswordOutlinedIcon,
  QuoteOutlinedIcon,
  RightArrowOutlinedIcon,
  RightChevronOutlinedIcon,
  SquareFilledIcon,
  SubmitOutlinedIcon,
  SuccessOutlinedIcon,
  WorldWideWebOutlinedIcon,
  //Tech icons
  AngularIcon,
  AwsIcon,
  CPlusPlusIcon,
  DjangoIcon,
  DockerIcon,
  FlutterIcon,
  GitIcon,
  GoogleCloudIcon,
  JavascriptIcon,
  KotlinIcon,
  KubernetesIcon,
  MongoDBIcon,
  NodeIcon,
  PostgreSQLIcon,
  PythonIcon,
  QtIcon,
  ReactIcon,
  SwiftIcon,
  TerraformIcon,
  TypeScriptIcon,
  //Utils
  useMediaQuery,
  withLayout,
}
