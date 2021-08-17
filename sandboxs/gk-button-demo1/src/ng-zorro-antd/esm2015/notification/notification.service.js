/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Overlay } from '@angular/cdk/overlay';
import { Injectable, Injector } from '@angular/core';
import { NzSingletonService } from 'ng-zorro-antd/core/services';
import { NzMNService } from 'ng-zorro-antd/message';
import { NzNotificationContainerComponent } from './notification-container.component';
import { NzNotificationServiceModule } from './notification.service.module';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/services";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "./notification.service.module";
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from 'ng-zorro-antd/core/services';
import * as ɵngcc2 from '@angular/cdk/overlay';
let notificationId = 0;
export class NzNotificationService extends NzMNService {
    constructor(nzSingletonService, overlay, injector) {
        super(nzSingletonService, overlay, injector);
        this.componentPrefix = 'notification-';
    }
    success(title, content, options) {
        return this.createInstance({ type: 'success', title, content }, options);
    }
    error(title, content, options) {
        return this.createInstance({ type: 'error', title, content }, options);
    }
    info(title, content, options) {
        return this.createInstance({ type: 'info', title, content }, options);
    }
    warning(title, content, options) {
        return this.createInstance({ type: 'warning', title, content }, options);
    }
    blank(title, content, options) {
        return this.createInstance({ type: 'blank', title, content }, options);
    }
    create(type, title, content, options) {
        return this.createInstance({ type, title, content }, options);
    }
    template(template, options) {
        return this.createInstance({ template }, options);
    }
    generateMessageId() {
        return `${this.componentPrefix}-${notificationId++}`;
    }
    createInstance(message, options) {
        this.container = this.withContainer(NzNotificationContainerComponent);
        return this.container.create(Object.assign(Object.assign({}, message), {
            createdAt: new Date(),
            messageId: this.generateMessageId(),
            options
        }));
    }
}
NzNotificationService.ɵfac = function NzNotificationService_Factory(t) { return new (t || NzNotificationService)(ɵngcc0.ɵɵinject(ɵngcc1.NzSingletonService), ɵngcc0.ɵɵinject(ɵngcc2.Overlay), ɵngcc0.ɵɵinject(ɵngcc0.Injector)); };
NzNotificationService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NzNotificationService_Factory() { return new NzNotificationService(i0.ɵɵinject(i1.NzSingletonService), i0.ɵɵinject(i2.Overlay), i0.ɵɵinject(i0.INJECTOR)); }, token: NzNotificationService, providedIn: i3.NzNotificationServiceModule });
NzNotificationService.ctorParameters = () => [
    { type: NzSingletonService },
    { type: Overlay },
    { type: Injector }
];
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(NzNotificationService, [{
        type: Injectable,
        args: [{
                providedIn: NzNotificationServiceModule
            }]
    }], function () { return [{ type: ɵngcc1.NzSingletonService }, { type: ɵngcc2.Overlay }, { type: ɵngcc0.Injector }]; }, null); })();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90aWZpY2F0aW9uLnNlcnZpY2UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFFSCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWUsTUFBTSxlQUFlLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDakUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBELE9BQU8sRUFBRSxnQ0FBZ0MsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzVFO0FBQXFDO0FBQW1EO0FBSTVFOzs7O0FBRlosSUFBSSxjQUFjLEdBQUcsQ0FBQyxDQUFDO0FBS3ZCLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSxXQUFXO0FBQ3RELElBR0UsWUFBWSxrQkFBc0MsRUFBRSxPQUFnQixFQUFFLFFBQWtCO0FBQzFGLFFBQUksS0FBSyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztBQUNqRCxRQUpZLG9CQUFlLEdBQUcsZUFBZSxDQUFDO0FBQzlDLElBR0UsQ0FBQztBQUNILElBQ0UsT0FBTyxDQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBbUM7QUFBSSxRQUM3RSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3RSxJQUFFLENBQUM7QUFDSCxJQUNFLEtBQUssQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQW1DO0FBQUksUUFDM0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0UsSUFBRSxDQUFDO0FBQ0gsSUFDRSxJQUFJLENBQUMsS0FBYSxFQUFFLE9BQWUsRUFBRSxPQUFtQztBQUFJLFFBQzFFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQzFFLElBQUUsQ0FBQztBQUNILElBQ0UsT0FBTyxDQUFDLEtBQWEsRUFBRSxPQUFlLEVBQUUsT0FBbUM7QUFBSSxRQUM3RSxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUM3RSxJQUFFLENBQUM7QUFDSCxJQUNFLEtBQUssQ0FBQyxLQUFhLEVBQUUsT0FBZSxFQUFFLE9BQW1DO0FBQUksUUFDM0UsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDM0UsSUFBRSxDQUFDO0FBQ0gsSUFDRSxNQUFNLENBQ0osSUFBaUUsRUFDakUsS0FBYSxFQUNiLE9BQWUsRUFDZixPQUFtQztBQUNwQyxRQUNDLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLENBQUM7QUFDbEUsSUFBRSxDQUFDO0FBQ0gsSUFDRSxRQUFRLENBQUMsUUFBeUIsRUFBRSxPQUFtQztBQUFJLFFBQ3pFLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3RELElBQUUsQ0FBQztBQUNILElBQ1ksaUJBQWlCO0FBQUssUUFDOUIsT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksY0FBYyxFQUFFLEVBQUUsQ0FBQztBQUN6RCxJQUFFLENBQUM7QUFDSCxJQUNVLGNBQWMsQ0FBQyxPQUEyQixFQUFFLE9BQW1DO0FBQUksUUFDekYsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7QUFDMUUsUUFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxpQ0FDdkIsT0FBTyxHQUNQO0FBQ1QsWUFBUSxTQUFTLEVBQUUsSUFBSSxJQUFJLEVBQUU7QUFDN0IsWUFBUSxTQUFTLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixFQUFFO0FBQzNDLFlBQVEsT0FBTztBQUNmLFNBQU8sRUFDRCxDQUFDO0FBQ1AsSUFBRSxDQUFDO0FBQ0g7bU9BQUM7QUFDRCxrVEExREs7QUFBQztFQUhMLFVBQVUsU0FBQyxyQkFHeUMsWUFaNUMsa0JBQWtCO0tBVXpCLFVBQVUsRUFBRSxqQkFWaUIsWUFGdEIsT0FBTztxQkFZeUIsckJBWnJCLFlBQ0MsUUFBUTtBQUFHO1NBWS9COzs7Ozt3SUFaaUM7QUFBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICovXG5cbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56U2luZ2xldG9uU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBOek1OU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvbWVzc2FnZSc7XG5cbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9ub3RpZmljYXRpb24tY29udGFpbmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvblNlcnZpY2VNb2R1bGUgfSBmcm9tICcuL25vdGlmaWNhdGlvbi5zZXJ2aWNlLm1vZHVsZSc7XG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkRhdGEsIE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMsIE56Tm90aWZpY2F0aW9uUmVmIH0gZnJvbSAnLi90eXBpbmdzJztcblxubGV0IG5vdGlmaWNhdGlvbklkID0gMDtcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiBOek5vdGlmaWNhdGlvblNlcnZpY2VNb2R1bGVcbn0pXG5leHBvcnQgY2xhc3MgTnpOb3RpZmljYXRpb25TZXJ2aWNlIGV4dGVuZHMgTnpNTlNlcnZpY2Uge1xuICBwcm90ZWN0ZWQgY29udGFpbmVyITogTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQ7XG4gIHByb3RlY3RlZCBjb21wb25lbnRQcmVmaXggPSAnbm90aWZpY2F0aW9uLSc7XG5cbiAgY29uc3RydWN0b3IobnpTaW5nbGV0b25TZXJ2aWNlOiBOelNpbmdsZXRvblNlcnZpY2UsIG92ZXJsYXk6IE92ZXJsYXksIGluamVjdG9yOiBJbmplY3Rvcikge1xuICAgIHN1cGVyKG56U2luZ2xldG9uU2VydmljZSwgb3ZlcmxheSwgaW5qZWN0b3IpO1xuICB9XG5cbiAgc3VjY2Vzcyh0aXRsZTogc3RyaW5nLCBjb250ZW50OiBzdHJpbmcsIG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zKTogTnpOb3RpZmljYXRpb25SZWYge1xuICAgIHJldHVybiB0aGlzLmNyZWF0ZUluc3RhbmNlKHsgdHlwZTogJ3N1Y2Nlc3MnLCB0aXRsZSwgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIGVycm9yKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMpOiBOek5vdGlmaWNhdGlvblJlZiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoeyB0eXBlOiAnZXJyb3InLCB0aXRsZSwgY29udGVudCB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIGluZm8odGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uUmVmIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZSh7IHR5cGU6ICdpbmZvJywgdGl0bGUsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XG4gIH1cblxuICB3YXJuaW5nKHRpdGxlOiBzdHJpbmcsIGNvbnRlbnQ6IHN0cmluZywgb3B0aW9ucz86IE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMpOiBOek5vdGlmaWNhdGlvblJlZiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoeyB0eXBlOiAnd2FybmluZycsIHRpdGxlLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgYmxhbmsodGl0bGU6IHN0cmluZywgY29udGVudDogc3RyaW5nLCBvcHRpb25zPzogTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyk6IE56Tm90aWZpY2F0aW9uUmVmIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZSh7IHR5cGU6ICdibGFuaycsIHRpdGxlLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgY3JlYXRlKFxuICAgIHR5cGU6ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCAnYmxhbmsnIHwgc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgY29udGVudDogc3RyaW5nLFxuICAgIG9wdGlvbnM/OiBOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zXG4gICk6IE56Tm90aWZpY2F0aW9uUmVmIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVJbnN0YW5jZSh7IHR5cGUsIHRpdGxlLCBjb250ZW50IH0sIG9wdGlvbnMpO1xuICB9XG5cbiAgdGVtcGxhdGUodGVtcGxhdGU6IFRlbXBsYXRlUmVmPHt9Piwgb3B0aW9ucz86IE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMpOiBOek5vdGlmaWNhdGlvblJlZiB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlSW5zdGFuY2UoeyB0ZW1wbGF0ZSB9LCBvcHRpb25zKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZW5lcmF0ZU1lc3NhZ2VJZCgpOiBzdHJpbmcge1xuICAgIHJldHVybiBgJHt0aGlzLmNvbXBvbmVudFByZWZpeH0tJHtub3RpZmljYXRpb25JZCsrfWA7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUluc3RhbmNlKG1lc3NhZ2U6IE56Tm90aWZpY2F0aW9uRGF0YSwgb3B0aW9ucz86IE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMpOiBOek5vdGlmaWNhdGlvblJlZiB7XG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLndpdGhDb250YWluZXIoTnpOb3RpZmljYXRpb25Db250YWluZXJDb21wb25lbnQpO1xuXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyLmNyZWF0ZSh7XG4gICAgICAuLi5tZXNzYWdlLFxuICAgICAgLi4ue1xuICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCksXG4gICAgICAgIG1lc3NhZ2VJZDogdGhpcy5nZW5lcmF0ZU1lc3NhZ2VJZCgpLFxuICAgICAgICBvcHRpb25zXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==