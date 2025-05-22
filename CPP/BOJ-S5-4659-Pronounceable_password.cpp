#include <bits/stdc++.h>
using namespace std;

string s;
int ccnt, vcnt;

bool isVowel(int idx)
{
  return (idx == 'a' || idx == 'e' || idx == 'i' || idx == 'o' || idx == 'u');
}

int main()
{
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  cout.tie(NULL);
  // freopen("input.txt", "r", stdin);
  // freopen("output.txt", "w", stdout);

  while (true)
  {
    cin >> s;
    if (s == "end")
      break;

    ccnt = vcnt = 0;
    bool flag = 0;
    bool is_include_v = 0;
    int prev = -1;

    for (int i = 0; i < s.size(); ++i)
    {
      int idx = s[i];
      if (isVowel(idx))
        ccnt = 0, ++vcnt, is_include_v = 1;
      else
        vcnt = 0, ++ccnt;

      if (vcnt == 3 || ccnt == 3)
        flag = 1;

      if (i >= 1 && (prev == idx) && (idx != 'e' && idx != 'o'))
        flag = 1;

      prev = idx;
    }

    if (is_include_v == 0)
      flag = 1;

    if (flag)
      cout << "<" << s << ">" << " is not acceptable.\n";
    else
      cout << "<" << s << ">" << " is acceptable.\n";
  }

  return 0;
}