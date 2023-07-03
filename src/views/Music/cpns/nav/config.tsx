// component
// import SvgColor from '../../../components/svg-color';

import { AppleOutlined, CheckCircleOutlined, TrademarkOutlined } from "@ant-design/icons";

// ----------------------------------------------------------------------

// const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Recommend',
    path: '/music/recommend',
    icon: <TrademarkOutlined />,
  },
  {
    title: 'Albums',
    path: '/music/albums',
    icon: <CheckCircleOutlined/>,
  },
  {
    title: 'Artists',
    path: '/music/artists',
    icon: <AppleOutlined />,
  }
];

export default navConfig;
