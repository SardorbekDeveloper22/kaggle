/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
 import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
 import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
 import AutoImage from '@ckeditor/ckeditor5-image/src/autoimage.js';
 import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
 import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js';
 import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave.js';
 import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote.js';
 import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
 import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices.js';
 import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js';
 import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock.js';
 import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
 import FindAndReplace from '@ckeditor/ckeditor5-find-and-replace/src/findandreplace.js';
 import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor.js';
 import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor.js';
 import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily.js';
 import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
 import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
 import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
 import Image from '@ckeditor/ckeditor5-image/src/image.js';
 import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption.js';
 import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize.js';
 import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle.js';
 import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar.js';
 import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload.js';
 import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
 import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
 import Link from '@ckeditor/ckeditor5-link/src/link.js';
 import List from '@ckeditor/ckeditor5-list/src/list.js';
 import Markdown from '@ckeditor/ckeditor5-markdown-gfm/src/markdown.js';
 import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed.js';
 import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
 import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice.js';
 import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall.js';
 import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting.js';
 import Table from '@ckeditor/ckeditor5-table/src/table.js';
 import TableColumnResize from '@ckeditor/ckeditor5-table/src/tablecolumnresize.js';
 import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar.js';
 import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';
 import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
 import WordCount from '@ckeditor/ckeditor5-word-count/src/wordcount.js';

 class Editor extends ClassicEditor {}

 // Plugins to include in the build.
 Editor.builtinPlugins = [
     Alignment,
     AutoImage,
     Autoformat,
     AutoLink,
     Autosave,
     BlockQuote,
     Bold,
     CloudServices,
     Code,
     CodeBlock,
     Essentials,
     FindAndReplace,
     FontBackgroundColor,
     FontColor,
     FontFamily,
     FontSize,
     Heading,
     Highlight,
     Image,
     ImageCaption,
     ImageResize,
     ImageStyle,
     ImageToolbar,
     ImageUpload,
     Indent,
     Italic,
     Link,
     List,
     Markdown,
     MediaEmbed,
     Paragraph,
     PasteFromOffice,
     SelectAll,
     SourceEditing,
     Table,
     TableColumnResize,
     TableToolbar,
     TextTransformation,
     TodoList,
     WordCount
 ];

 // Editor configuration.
 Editor.defaultConfig = {
     toolbar: {
         items: [
         ]
     },
     language: 'uz',
     image: {
         toolbar: [
             'imageTextAlternative',
             'toggleImageCaption',
             'imageStyle:inline',
             'imageStyle:block',
             'imageStyle:side'
         ]
     },
     table: {
         contentToolbar: [
             'tableColumn',
             'tableRow',
             'mergeTableCells'
         ]
     }
 };

 export default Editor;
