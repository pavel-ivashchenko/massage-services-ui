import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CoreStorageService } from '@app/core/services/core-storage.service';
import { IDiscount, IService } from '@app/interfaces';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private storageService: CoreStorageService
  ) { }

  public getDiscountsList(): Observable<IDiscount[]> {
    return of([
      { id: 'discount_1', name: 'header.test-discount', href: '/' },
      { id: 'discount_2', name: 'header.test-discount', href: '/' },
      { id: 'discount_3', name: 'header.test-discount', href: '/' }
    ]);
  }

  public getServicesList(): Observable<IService[]> {
    return of([
      { id: 'service_1', name: 'header.test-service', href: '/' },
      { id: 'service_2', name: 'header.test-service', href: '/' },
      { id: 'service_3', name: 'header.test-service', href: '/' }
    ]);
  }

  // public getUserProfileData(): Observable<IUserProfile> {
  //   return this.http.get<IUserProfile>(`${API_URL}/profile`);
  // }

  // public uploadAvatar({ data }: IUploadAvatarReq): Observable<IUploadAvatarRes> {
  //   return this.http.post<IUploadAvatarRes>(`${API_URL}/profile/avatar`, data);
  // }

  // public changePassword(data: IChangePasswordReq): Observable<object> {
  //   return this.http.put<object>(`${API_URL}/profile/password`, data);
  // }

  // public checkPassword(data: IValidatePasswordReq): Observable<IValidatePasswordRes> {
  //   return this.http.post<IValidatePasswordRes>(`${API_URL}/check/password`, data);
  // }

  // public updateProfile(data: IUserProfile): Observable<IUserProfile> {
  //   return this.http.put<IUserProfile>(`${API_URL}/profile`, data);
  // }

  // public resendOnboardingInvite(data: { email_address: string; }): Observable<IResendOnboardingInviteRes> {
  //   return this.http.post<IResendOnboardingInviteRes>(`${API_URL}/resend/verify/email`, data);
  // }

  // public validateOnboardingEmailToken(data: IValidateOnboardingEmailTokenReq): Observable<IValidateOnboardingEmailTokenRes> {
  //   return this.http.post<IValidateOnboardingEmailTokenRes>(`${API_URL}/verify/email`, data);
  // }

  // // STORAGE METHODS

  // public saveTokenInStorage(token: string): void {
  //   this.storageService.set(TOKEN_KEY, token);
  // }

  // public saveUserDataInStorage(user: IUserProfile): void {
  //   this.storageService.set(USER_ID_KEY, user.id);
  // }

  // public removeAllDataFromStorage(): void {
  //   this.storageService.remove(TOKEN_KEY);
  //   this.storageService.remove(USER_ID_KEY);
  // }

  // public isCredentialsInStorage(): boolean {
  //   return !!(this.storageService.get(TOKEN_KEY) && this.storageService.get(USER_ID_KEY));
  // }

}
