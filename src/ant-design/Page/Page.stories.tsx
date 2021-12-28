import 'antd/dist/antd.css';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Page } from './Page';

export default {
  title: 'Page',
  component: Page,
  argTypes: {
  },
} as ComponentMeta<typeof Page>;

const doc: any = {
    type: 'class',
    name: 'AbstractDoc',
    isDefaultExport: true,
    jsDoc: {
      description: '\nThe base representation for all documentation nodes.',
      tags: []
    },
    isExported: true,
    extends: undefined,
    isAbstract: false,
    methods: [
      {
        type: 'method',
        name: 'getJSDocs',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        returnType: 'JSDoc[]',
        isStatic: false,
        hasQuestionToken: false,
        scope: 'protected',
        parameters: []
      },
      {
        type: 'method',
        name: 'getIsDefaultExport',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        returnType: 'boolean',
        isStatic: false,
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      },
      {
        type: 'method',
        name: 'getStructure',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        returnType: 'S | null',
        isStatic: false,
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      },
      {
        type: 'method',
        name: 'getName',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        returnType: 'string',
        isStatic: false,
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      },
      {
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
        returnType: 'TsDocGenDoc[]',
        isStatic: false,
        hasQuestionToken: false,
        scope: 'private',
        parameters: [
          {
            type: 'parameter',
            name: 'docs',
            isDefaultExport: false,
            jsDoc: { description: '', tags: [] },
            isExported: false,
            initializer: undefined,
            isReadonly: false,
            scope: undefined,
            decorators: [],
            hasQuestionToken: false,
            hasOverrideKeyword: false,
            kind: 29,
            isRestParameter: false,
            tsType: 'JSDoc[]'
          }
        ]
      },
      {
        type: 'method',
        name: 'setDescriptionAndTags',
        isDefaultExport: false,
        jsDoc: {
          description: '\n' +
            'Extracts the description and tags from the JsDoc associated with the node.',
          tags: []
        },
        isExported: false,
        returnType: 'void',
        isStatic: false,
        hasQuestionToken: false,
        scope: 'private',
        parameters: []
      },
      {
        type: 'method',
        name: 'toJSON',
        isDefaultExport: false,
        jsDoc: {
          description: 'Returns a JSON representation of a doc.',
          tags: []
        },
        isExported: false,
        returnType: 'AbstractDocJSON<T> & Record<string, any>',
        isStatic: false,
        hasQuestionToken: false,
        scope: 'public',
        parameters: []
      },
      {
        type: 'method',
        name: 'traverse',
        isDefaultExport: false,
        jsDoc: { description: "Traverses a doc and its' children", tags: [] },
        isExported: false,
        returnType: 'void',
        isStatic: false,
        hasQuestionToken: false,
        scope: 'public',
        parameters: []
      },
      {
        type: 'method',
        name: 'getReturnType',
        isDefaultExport: false,
        jsDoc: {
          description: 'Gets the return type of the doc as a string.',
          tags: []
        },
        isExported: false,
        returnType: 'string',
        isStatic: false,
        hasQuestionToken: false,
        scope: 'public',
        parameters: []
      },
      {
        type: 'method',
        name: 'toString',
        isDefaultExport: false,
        jsDoc: {
          description: 'Returns a string representation of a doc.',
          tags: []
        },
        isExported: false,
        returnType: 'string',
        isStatic: false,
        hasQuestionToken: false,
        scope: 'public',
        parameters: []
      }
    ],
    typeParameters: [
      {
        type: 'type-parameter',
        name: 'T',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        constraint: 'string',
        default: undefined
      },
      {
        type: 'type-parameter',
        name: 'N',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        constraint: 'Node',
        default: undefined
      },
      {
        type: 'type-parameter',
        name: 'S',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        constraint: 'Structure',
        default: 'Structure'
      }
    ],
    parameters: [],
    signatures: [],
    properties: [
      {
        type: 'property',
        name: 'description',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: ''
      },
      {
        type: 'property',
        name: 'tags',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: ''
      },
      {
        type: 'property',
        name: 'node',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: ''
      },
      {
        type: 'property',
        name: 'name',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: ''
      },
      {
        type: 'property',
        name: 'kind',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: ''
      },
      {
        type: 'property',
        name: 'structure',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: ''
      },
      {
        type: 'property',
        name: 'type',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: ''
      },
      {
        type: 'property',
        name: 'isDefaultExport',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: ''
      },
      {
        type: 'property',
        name: 'symbol',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: ''
      },
      {
        type: 'property',
        name: 'checker',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: ''
      },
      {
        type: 'property',
        name: 'tsType',
        isDefaultExport: false,
        jsDoc: { description: '', tags: [] },
        isExported: false,
        hasQuestionToken: false,
        isReadonly: false,
        returnType: ''
      }
    ]
  }

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Page> = (args) => <Page {...args} doc={doc} />;

export const Primary = Template.bind({});

Primary.args = {
    doc
};
