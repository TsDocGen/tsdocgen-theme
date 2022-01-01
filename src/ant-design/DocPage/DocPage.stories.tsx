import 'antd/dist/antd.css';
import '../Registry/RegistryExport';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DocPage } from './DocPage';

export default {
  title: 'DocPage',
  component: DocPage,
  argTypes: {
  },
} as ComponentMeta<typeof DocPage>;

const page: any = {
  type: 'DocPage',
  url: '/classes/BaseDoc',
  path: '/models/documentation/BaseDoc.ts',
  relativePath: '/src/models/documentation/BaseDoc.ts',
  navigation: [],
  doc: {
    id: '/src/models/documentation/BaseDoc.ts:17',
    type: 'class',
    name: 'BaseDoc',
    isDefaultExport: true,
    url: '#BaseDoc',
    jsDoc: {
      description: '\nThe base representation for all documentation nodes.',
      tags: [
        { tag: 'param', tagName: 'node', text: 'The ts-morph node' },
        {
          tag: 'param',
          tagName: 'type',
          text: 'The type of node such as `method`'
        },
        {
          tag: 'param',
          tagName: 'context',
          text: 'The TsDocGenContext.'
        },
        {
          tag: 'param',
          tagName: 'parent',
          text: 'The parent/owner doc.'
        },
        { tag: 'typeParam', tagName: 'T', text: 'The document type' },
        {
          tag: 'typeParam',
          tagName: 'N',
          text: 'Generic Node type from `ts-morph`'
        },
        {
          tag: 'typeParam',
          tagName: 'S',
          text: 'Generic Structure type from `ts-morph`'
        }
      ]
    },
    isExported: true,
    sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
    startLineNumber: 17,
    extends: undefined,
    isAbstract: false,
    methods: [
      {
        id: '/src/models/documentation/BaseDoc.ts:60',
        type: 'method',
        name: 'toJSON',
        isDefaultExport: false,
        url: '#toJSON',
        jsDoc: {
          description: 'Returns a JSON representation of a doc.',
          tags: []
        },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 60,
        returnType: 'BaseDocJSON<T> & Record<string, any>',
        hasQuestionToken: false,
        scope: 'public',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:78',
        type: 'method',
        name: 'traverse',
        isDefaultExport: false,
        url: '#traverse',
        jsDoc: { description: "Traverses a doc and its' children", tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 78,
        returnType: 'void',
        hasQuestionToken: false,
        scope: 'public',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:83',
        type: 'method',
        name: 'getReturnType',
        isDefaultExport: false,
        url: '#getReturnType',
        jsDoc: {
          description: 'Gets the return type of the doc as a string.',
          tags: []
        },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 83,
        returnType: 'string',
        hasQuestionToken: false,
        scope: 'public',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:97',
        type: 'method',
        name: 'toString',
        isDefaultExport: false,
        url: '#toString',
        jsDoc: {
          description: 'Returns a string representation of a doc.',
          tags: []
        },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 97,
        returnType: 'string',
        hasQuestionToken: false,
        scope: 'public',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:102',
        type: 'method',
        name: 'setDescription',
        isDefaultExport: false,
        url: '#setDescription',
        jsDoc: { description: 'Sets the description for the doc.', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 102,
        returnType: 'void',
        hasQuestionToken: false,
        scope: 'public',
        parameters: [
          {
            id: '/src/models/documentation/BaseDoc.ts:102',
            type: 'parameter',
            name: 'description',
            isDefaultExport: false,
            url: '#description',
            jsDoc: { description: '', tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 102,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          }
        ]
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:107',
        type: 'method',
        name: 'setTags',
        isDefaultExport: false,
        url: '#setTags',
        jsDoc: { description: 'Sets the tags for the doc.', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 107,
        returnType: 'void',
        hasQuestionToken: false,
        scope: 'public',
        parameters: [
          {
            id: '/src/models/documentation/BaseDoc.ts:107',
            type: 'parameter',
            name: 'tags',
            isDefaultExport: false,
            url: '#tags',
            jsDoc: { description: '', tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 107,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          }
        ]
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:113',
        type: 'method',
        name: 'getJSDocs',
        isDefaultExport: false,
        url: '#getJSDocs',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 113,
        returnType: 'JSDoc[]',
        hasQuestionToken: false,
        scope: 'protected',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:122',
        type: 'method',
        name: 'addToSymbolCache',
        isDefaultExport: false,
        url: '#addToSymbolCache',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 122,
        returnType: 'void',
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:128',
        type: 'method',
        name: 'getIsDefaultExport',
        isDefaultExport: false,
        url: '#getIsDefaultExport',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 128,
        returnType: 'boolean',
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:135',
        type: 'method',
        name: 'getStructure',
        isDefaultExport: false,
        url: '#getStructure',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 135,
        returnType: 'S | null',
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:142',
        type: 'method',
        name: 'getName',
        isDefaultExport: false,
        url: '#getName',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 142,
        returnType: 'string',
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:157',
        type: 'method',
        name: 'formatJsDocs',
        isDefaultExport: false,
        url: '#formatJsDocs',
        jsDoc: {
          description: '\nParses the jsDocs description and tags. \n',
          tags: [
            {
              tag: 'param',
              tagName: 'docs',
              text: "An array of JsDoc's"
            },
            {
              tag: 'returns',
              tagName: 'An',
              text: "array of TsDocGenDoc's"
            }
          ]
        },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 157,
        returnType: 'TsDocGenDoc[]',
        hasQuestionToken: false,
        scope: 'private',
        parameters: [
          {
            id: '/src/models/documentation/BaseDoc.ts:158',
            type: 'parameter',
            name: 'docs',
            isDefaultExport: false,
            url: '#docs',
            jsDoc: { description: "An array of JsDoc's", tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 158,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          }
        ]
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:180',
        type: 'method',
        name: 'setDescriptionAndTags',
        isDefaultExport: false,
        url: '#setDescriptionAndTags',
        jsDoc: {
          description: '\n' +
            'Extracts the description and tags from the JsDoc associated with the node.',
          tags: []
        },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 180,
        returnType: 'void',
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      }
    ],
    typeParameters: [
      {
        id: '/src/models/documentation/BaseDoc.ts:17',
        type: 'type-parameter',
        name: 'T',
        isDefaultExport: false,
        url: '#T',
        jsDoc: { description: 'The document type', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 17,
        constraint: 'string',
        default: undefined
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:17',
        type: 'type-parameter',
        name: 'N',
        isDefaultExport: false,
        url: '#N',
        jsDoc: { description: 'Generic Node type from `ts-morph`', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 17,
        constraint: 'Node',
        default: undefined
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:17',
        type: 'type-parameter',
        name: 'S',
        isDefaultExport: false,
        url: '#S',
        jsDoc: {
          description: 'Generic Structure type from `ts-morph`',
          tags: []
        },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 17,
        constraint: 'Structure',
        default: 'Structure'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:17',
        type: 'type-parameter',
        name: 'P',
        isDefaultExport: false,
        url: '#P',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 17,
        constraint: 'BaseDoc<string, Node, Structure, any> | undefined',
        default: 'undefined'
      }
    ],
    properties: [
      {
        id: '/src/models/documentation/BaseDoc.ts:18',
        type: 'property',
        name: 'id',
        isDefaultExport: false,
        url: '#id',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 18,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:19',
        type: 'property',
        name: 'description',
        isDefaultExport: false,
        url: '#description',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 19,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:20',
        type: 'property',
        name: 'tags',
        isDefaultExport: false,
        url: '#tags',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 20,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:21',
        type: 'property',
        name: 'node',
        isDefaultExport: false,
        url: '#node',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 21,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:22',
        type: 'property',
        name: 'name',
        isDefaultExport: false,
        url: '#name',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 22,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:23',
        type: 'property',
        name: 'kind',
        isDefaultExport: false,
        url: '#kind',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 23,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:24',
        type: 'property',
        name: 'structure',
        isDefaultExport: false,
        url: '#structure',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 24,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:25',
        type: 'property',
        name: 'type',
        isDefaultExport: false,
        url: '#type',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 25,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:26',
        type: 'property',
        name: 'isDefaultExport',
        isDefaultExport: false,
        url: '#isDefaultExport',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 26,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:27',
        type: 'property',
        name: 'symbol',
        isDefaultExport: false,
        url: '#symbol',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 27,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:28',
        type: 'property',
        name: 'tsType',
        isDefaultExport: false,
        url: '#tsType',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 28,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:29',
        type: 'property',
        name: 'context',
        isDefaultExport: false,
        url: '#context',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 29,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:30',
        type: 'property',
        name: 'sourceFileRelativePath',
        isDefaultExport: false,
        url: '#sourceFileRelativePath',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 30,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:31',
        type: 'property',
        name: 'startLineNumber',
        isDefaultExport: false,
        url: '#startLineNumber',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 31,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:32',
        type: 'property',
        name: 'url',
        isDefaultExport: false,
        url: '#url',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 32,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:33',
        type: 'property',
        name: 'parent',
        isDefaultExport: false,
        url: '#parent',
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 33,
        hasQuestionToken: true,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      }
    ],
    constructors: [
      {
        id: '/src/models/documentation/BaseDoc.ts:35',
        type: 'constructor',
        name: 'constructor',
        isDefaultExport: false,
        url: '#constructor-1',
        jsDoc: {
          description: '\nThe base representation for all documentation nodes.',
          tags: []
        },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 35,
        returnType: 'BaseDoc<T, N, S, P>',
        parameters: [
          {
            id: '/src/models/documentation/BaseDoc.ts:35',
            type: 'parameter',
            name: 'node',
            isDefaultExport: false,
            url: '#node',
            jsDoc: { description: 'The ts-morph node', tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 35,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          },
          {
            id: '/src/models/documentation/BaseDoc.ts:35',
            type: 'parameter',
            name: 'type',
            isDefaultExport: false,
            url: '#type',
            jsDoc: {
              description: 'The type of node such as `method`',
              tags: []
            },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 35,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          },
          {
            id: '/src/models/documentation/BaseDoc.ts:35',
            type: 'parameter',
            name: 'context',
            isDefaultExport: false,
            url: '#context',
            jsDoc: { description: 'The TsDocGenContext.', tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 35,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          },
          {
            id: '/src/models/documentation/BaseDoc.ts:35',
            type: 'parameter',
            name: 'sourceFileRelativePath',
            isDefaultExport: false,
            url: '#sourceFileRelativePath',
            jsDoc: { description: '', tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 35,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          },
          {
            id: '/src/models/documentation/BaseDoc.ts:35',
            type: 'parameter',
            name: 'parent',
            isDefaultExport: false,
            url: '#parent',
            jsDoc: { description: 'The parent/owner doc.', tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 35,
            hasOverrideKeyword: false,
            hasQuestionToken: true,
            isReadonly: false,
            scope: undefined
          }
        ]
      }
    ]
  },
  tableOfContents: {
    constructor: [ { name: 'constructor', url: '#constructor-1' } ],
    signature: [],
    property: [
      { name: 'id', url: '#id' },
      { name: 'description', url: '#description' },
      { name: 'tags', url: '#tags' },
      { name: 'node', url: '#node' },
      { name: 'name', url: '#name' },
      { name: 'kind', url: '#kind' },
      { name: 'structure', url: '#structure' },
      { name: 'type', url: '#type' },
      { name: 'isDefaultExport', url: '#isDefaultExport' },
      { name: 'symbol', url: '#symbol' },
      { name: 'tsType', url: '#tsType' },
      { name: 'context', url: '#context' },
      {
        name: 'sourceFileRelativePath',
        url: '#sourceFileRelativePath'
      },
      { name: 'startLineNumber', url: '#startLineNumber' },
      { name: 'url', url: '#url' },
      { name: 'parent', url: '#parent' }
    ],
    method: [
      { name: 'toJSON', url: '#toJSON' },
      { name: 'traverse', url: '#traverse' },
      { name: 'getReturnType', url: '#getReturnType' },
      { name: 'toString', url: '#toString' },
      { name: 'setDescription', url: '#setDescription' },
      { name: 'setTags', url: '#setTags' },
      { name: 'getJSDocs', url: '#getJSDocs' },
      { name: 'addToSymbolCache', url: '#addToSymbolCache' },
      { name: 'getIsDefaultExport', url: '#getIsDefaultExport' },
      { name: 'getStructure', url: '#getStructure' },
      { name: 'getName', url: '#getName' },
      { name: 'formatJsDocs', url: '#formatJsDocs' },
      { name: 'setDescriptionAndTags', url: '#setDescriptionAndTags' }
    ]
  }
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DocPage> = (args) => <DocPage {...args}/>;

export const Primary = Template.bind({});

Primary.args = {
    page
};
