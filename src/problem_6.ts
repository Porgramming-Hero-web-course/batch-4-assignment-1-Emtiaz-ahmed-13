interface IupdateProfile {
  name: string;
  age: number;
  email: string;
}
function updateProfile(
  profile: IupdateProfile,
  updates: Partial<IupdateProfile>
): IupdateProfile {
  return { ...profile, ...updates };
}
