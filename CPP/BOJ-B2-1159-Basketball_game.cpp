#include <bits/stdc++.h>
using namespace std;
int n, cnt[26];
string str, ret;

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  // freopen("input.txt", "r", stdin);
  // freopen("output.txt", "w", stdout);

  cin >> n;
  for (int i = 0; i < n; ++i)
  {
    cin >> str;
    // 정확한 형태는 int(str[0] - 'a')
    cnt[str[0] - 'a']++;
  }
  for (int i = 0; i < 26; ++i)
  {
    if (cnt[i] >= 5)
      // ret은 string 선언이기 때문에 숫자로 들어가도 문자로 저장된다.
      // 정확한 형태는 char(i + 'a')
      ret += (i + 'a');
  }
  if (ret.size())
    cout << ret << "\n";
  else
    cout << "PREDAJA" << "\n";

  return 0;
}