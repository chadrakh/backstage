/*
 * Copyright 2020 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The Backstage plugin that helps you create new things
 *
 * @packageDocumentation
 */
export { ScaffolderClient } from './api';

export {
  createScaffolderLayout,
  ScaffolderLayouts,
  type LayoutOptions,
  type LayoutTemplate,
  type LayoutComponent,
} from './layouts';

export {
  EntityPickerFieldExtension,
  EntityNamePickerFieldExtension,
  EntityTagsPickerFieldExtension,
  OwnerPickerFieldExtension,
  OwnedEntityPickerFieldExtension,
  RepoUrlPickerFieldExtension,
  ScaffolderPage,
  scaffolderPlugin,
} from './plugin';

export * from './components';
export * from './deprecated';

/** next exports */
export { NextScaffolderPage } from './plugin';
export {
  EmbeddedScaffolderWorkflow,
  type EmbeddedScaffolderWorkflowProps,
  type WorkflowProps,
  type ReviewStateProps,
  type ParsedTemplateSchema,
} from './next';
export type { NextRouterProps } from './next';
export type { TemplateGroupFilter } from './next';
export {
  nextRouteRef,
  nextScaffolderTaskRouteRef,
  nextSelectedTemplateRouteRef,
  type TemplateGroupFilter,
  type NextRouterProps,
  type FormProps,
} from './next';
