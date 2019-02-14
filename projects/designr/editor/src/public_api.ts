/*
 * Public API Surface of editor
 */

export { CommonModule } from '@angular/common';
export { HTTP_INTERCEPTORS } from '@angular/common/http';
export { ModuleWithProviders, NgModule, Optional, SkipSelf, Type } from '@angular/core';
export { FormsModule, ReactiveFormsModule } from '@angular/forms';
export { MarkdownModule, MarkedOptions } from 'ngx-markdown';
export { EditorConfig, EDITOR_CONFIG } from './lib/config/editor.config';
export { EditorService } from './lib/config/editor.service';
export { EditorModuleComponent } from './lib/editor-module.component';
export { EditorModule } from './lib/editor.module';
export { EditorComponent } from './lib/editor/editor.component';

