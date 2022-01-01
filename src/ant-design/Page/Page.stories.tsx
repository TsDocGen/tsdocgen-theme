import 'antd/dist/antd.css';
import '../Registry/RegistryExport';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';

export default {
  title: 'Page',
  component: Page,
  argTypes: {
  },
} as ComponentMeta<typeof Page>;

const doc: any = {
    id: '/src/models/documentation/BaseDoc.ts:17',
    type: 'class',
    name: 'BaseDoc',
    isDefaultExport: true,
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
        id: '/src/models/documentation/BaseDoc.ts:58',
        type: 'method',
        name: 'toJSON',
        isDefaultExport: false,
        jsDoc: {
          description: 'Returns a JSON representation of a doc.',
          tags: []
        },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 58,
        returnType: 'BaseDocJSON<T> & Record<string, any>',
        hasQuestionToken: false,
        scope: 'public',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:75',
        type: 'method',
        name: 'traverse',
        isDefaultExport: false,
        jsDoc: { description: "Traverses a doc and its' children", tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 75,
        returnType: 'void',
        hasQuestionToken: false,
        scope: 'public',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:80',
        type: 'method',
        name: 'getReturnType',
        isDefaultExport: false,
        jsDoc: {
          description: 'Gets the return type of the doc as a string.',
          tags: []
        },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 80,
        returnType: 'string',
        hasQuestionToken: false,
        scope: 'public',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:94',
        type: 'method',
        name: 'toString',
        isDefaultExport: false,
        jsDoc: {
          description: 'Returns a string representation of a doc.',
          tags: []
        },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 94,
        returnType: 'string',
        hasQuestionToken: false,
        scope: 'public',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:99',
        type: 'method',
        name: 'setDescription',
        isDefaultExport: false,
        jsDoc: { description: 'Sets the description for the doc.', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 99,
        returnType: 'void',
        hasQuestionToken: false,
        scope: 'public',
        parameters: [
          {
            id: '/src/models/documentation/BaseDoc.ts:99',
            type: 'parameter',
            name: 'description',
            isDefaultExport: false,
            jsDoc: { description: '', tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 99,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          }
        ]
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:104',
        type: 'method',
        name: 'setTags',
        isDefaultExport: false,
        jsDoc: { description: 'Sets the tags for the doc.', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 104,
        returnType: 'void',
        hasQuestionToken: false,
        scope: 'public',
        parameters: [
          {
            id: '/src/models/documentation/BaseDoc.ts:104',
            type: 'parameter',
            name: 'tags',
            isDefaultExport: false,
            jsDoc: { description: '', tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 104,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          }
        ]
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:110',
        type: 'method',
        name: 'getJSDocs',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 110,
        returnType: 'JSDoc[]',
        hasQuestionToken: false,
        scope: 'protected',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:119',
        type: 'method',
        name: 'addToSymbolCache',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 119,
        returnType: 'void',
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:125',
        type: 'method',
        name: 'getIsDefaultExport',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 125,
        returnType: 'boolean',
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:132',
        type: 'method',
        name: 'getStructure',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 132,
        returnType: 'S | null',
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:139',
        type: 'method',
        name: 'getName',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 139,
        returnType: 'string',
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:154',
        type: 'method',
        name: 'formatJsDocs',
        isDefaultExport: false,
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
        startLineNumber: 154,
        returnType: 'TsDocGenDoc[]',
        hasQuestionToken: false,
        scope: 'private',
        parameters: [
          {
            id: '/src/models/documentation/BaseDoc.ts:155',
            type: 'parameter',
            name: 'docs',
            isDefaultExport: false,
            jsDoc: { description: "An array of JsDoc's", tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 155,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          }
        ]
      },
      {
        id: '/src/models/documentation/BaseDoc.ts:177',
        type: 'method',
        name: 'setDescriptionAndTags',
        isDefaultExport: false,
        jsDoc: {
          description: '\n' +
            'Extracts the description and tags from the JsDoc associated with the node.',
          tags: []
        },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 177,
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
        name: 'parent',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 32,
        hasQuestionToken: true,
        isReadonly: false,
        returnType: '',
        scope: 'public'
      }
    ],
    constructors: [
      {
        id: '/src/models/documentation/BaseDoc.ts:34',
        type: 'constructor',
        name: 'constructor',
        isDefaultExport: false,
        jsDoc: {
          description: '\nThe base representation for all documentation nodes.',
          tags: []
        },
        isExported: false,
        sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
        startLineNumber: 34,
        returnType: 'BaseDoc<T, N, S, P>',
        parameters: [
          {
            id: '/src/models/documentation/BaseDoc.ts:34',
            type: 'parameter',
            name: 'node',
            isDefaultExport: false,
            jsDoc: { description: 'The ts-morph node', tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 34,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          },
          {
            id: '/src/models/documentation/BaseDoc.ts:34',
            type: 'parameter',
            name: 'type',
            isDefaultExport: false,
            jsDoc: {
              description: 'The type of node such as `method`',
              tags: []
            },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 34,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          },
          {
            id: '/src/models/documentation/BaseDoc.ts:34',
            type: 'parameter',
            name: 'context',
            isDefaultExport: false,
            jsDoc: { description: 'The TsDocGenContext.', tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 34,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          },
          {
            id: '/src/models/documentation/BaseDoc.ts:34',
            type: 'parameter',
            name: 'sourceFileRelativePath',
            isDefaultExport: false,
            jsDoc: { description: '', tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 34,
            hasOverrideKeyword: false,
            hasQuestionToken: false,
            isReadonly: false,
            scope: undefined
          },
          {
            id: '/src/models/documentation/BaseDoc.ts:34',
            type: 'parameter',
            name: 'parent',
            isDefaultExport: false,
            jsDoc: { description: 'The parent/owner doc.', tags: [] },
            isExported: false,
            sourceFileRelativePath: '/src/models/documentation/BaseDoc.ts',
            startLineNumber: 34,
            hasOverrideKeyword: false,
            hasQuestionToken: true,
            isReadonly: false,
            scope: undefined
          }
        ]
      }
    ]
  };

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Page> = (args) => <Page {...args} doc={doc} />;

export const Primary = Template.bind({});

Primary.args = {
    doc
};
