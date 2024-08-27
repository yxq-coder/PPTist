// https://iconpark.bytedance.com/official

import { App } from 'vue'
import {
  SaveOne,
  PreviewOpen,
  PlayOne,
  Lock,
  Unlock,
  Ppt,
  Format,
  Picture,
  FilePdf,
  FullScreen,
  List,
  OrderedList,
  Helpcenter,
  FlipVertically,
  FlipHorizontally,
  FontSize,
  Code,
  TextBold,
  TextItalic,
  TextUnderline,
  Strikethrough,
  Edit,
  Quote,
  BackgroundColor,
  Group,
  Ungroup,
  Back,
  Next,
  Fullwidth,
  AlignTop,
  AlignLeft,
  AlignRight,
  AlignBottom,
  AlignVertically,
  AlignHorizontally,
  BringToFront,
  SendToBack,
  AlignTextLeft,
  AlignTextRight,
  AlignTextCenter,
  RowHeight,
  Write,
  InsertTable,
  AddText,
  Fill,
  Tailoring,
  Effects,
  ColorFilter,
  Down,
  Plus,
  Minus,
  Connection,
  BringToFrontOne,
  SentToBack,
  Github,
  ChartProportion,
  ChartHistogram,
  ChartHistogramOne,
  ChartLineArea,
  ChartRing,
  ChartScatter,
  ChartLine,
  ChartPie,
  Text,
  Rotate,
  LeftTwo,
  RightTwo,
  Platte,
  UpOne,
  DownOne,
  Close,
  CloseSmall,
  Undo,
  Transform,
  Click,
  Theme,
  ArrowCircleLeft,
  GraphicDesign,
  Logout,
  Erase,
  Clear,
  FolderClose,
  AlignTextTopOne,
  AlignTextBottomOne,
  AlignTextMiddleOne,
  Pause,
  VolumeMute,
  VolumeNotice,
  VolumeSmall,
  VideoTwo,
  Formula,
  LinkOne,
  FullScreenOne,
  OffScreenOne,
  Power,
  ListView,
  Magic,
  HighLight,
  Share,
  IndentLeft,
  IndentRight,
  VerticalSpacingBetweenItems,
} from '@icon-park/vue-next'

const icons = {
  SaveOne,
  PreviewOpen,
  PlayOne,
  Lock,
  Unlock,
  Ppt,
  Format,
  Picture,
  FilePdf,
  FullScreen,
  List,
  OrderedList,
  Helpcenter,
  FlipVertically,
  FlipHorizontally,
  FontSize,
  Code,
  TextBold,
  TextItalic,
  TextUnderline,
  Strikethrough,
  Edit,
  Quote,
  BackgroundColor,
  Group,
  Ungroup,
  Back,
  Next,
  Fullwidth,
  AlignTop,
  AlignLeft,
  AlignRight,
  AlignBottom,
  AlignVertically,
  AlignHorizontally,
  BringToFront,
  SendToBack,
  AlignTextLeft,
  AlignTextRight,
  AlignTextCenter,
  RowHeight,
  Write,
  InsertTable,
  AddText,
  Fill,
  Tailoring,
  Effects,
  ColorFilter,
  Down,
  Plus,
  Minus,
  Connection,
  BringToFrontOne,
  SentToBack,
  Github,
  ChartProportion,
  ChartHistogram,
  ChartHistogramOne,
  ChartLineArea,
  ChartRing,
  ChartScatter,
  ChartLine,
  ChartPie,
  Text,
  Rotate,
  LeftTwo,
  RightTwo,
  Platte,
  UpOne,
  DownOne,
  Close,
  CloseSmall,
  Undo,
  Transform,
  Click,
  Theme,
  ArrowCircleLeft,
  GraphicDesign,
  Logout,
  Erase,
  Clear,
  FolderClose,
  AlignTextTopOne,
  AlignTextBottomOne,
  AlignTextMiddleOne,
  Pause,
  VolumeMute,
  VolumeNotice,
  VolumeSmall,
  VideoTwo,
  Formula,
  LinkOne,
  FullScreenOne,
  OffScreenOne,
  Power,
  ListView,
  Magic,
  HighLight,
  Share,
  IndentLeft,
  IndentRight,
  VerticalSpacingBetweenItems,
}

export default {
  install(app: App) {
    for (const key of Object.keys(icons)) {
      app.component(`Icon${key}`, icons[key])
    }
  }
}