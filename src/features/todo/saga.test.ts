describe('Saga Test', () => {
  describe('fetchUser', () => {
    it('사용자 정보를 가져오는 api를 호출하고, redux에 userInfo를 저장하고, 정상 종료한다.', () => {
      const id = '19870605';
      const iterator = fetchUser(fetchUserAction(id));

      // 1. secret를 가져오는 effect(`getSecret`) 생성
      expect(iterator.next().value).toEqual(call(getSecret, id));
      // 2. api호출을 하는 effect(`callApiForFetchUser`) 생성
      expect(iterator.next({ secret: 't4lz0mf4lt' }).value).toEqual(
        call(callApiForFetchUser, { param1: 'param1', param2: 'param2' })
      );
      // 3. redux에 저장하기 위한 effect(`setUserInfo`) 생성
      expect(iterator.next({ name: 'nukeguys', level: 'vip' }).value).toEqual(
        put(
          setUserInfoAction({
            login: true,
            user: { name: 'nukeguys', level: 'vip' },
          })
        )
      );
      // 4. 실행 완료
      expect(iterator.next().done).toBeTruthy();
    });
  });
});

export {};
