import { Injectable, ErrorHandler } from '@angular/core'

import { AlertService } from './alert.service'

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService implements ErrorHandler {

  constructor(
    private alertService: AlertService
  ) {}

  handleError(error: Error) {
    let message = error.toString()
    if (message === '[object Object]') {
      message = error.message
    }
    this.alertService.publishError(message)
  }

}
