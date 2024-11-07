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

// const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(updateProfile(myProfile, { age: 26 }));
